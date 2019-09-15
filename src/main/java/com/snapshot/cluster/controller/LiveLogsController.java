package com.snapshot.cluster.controller;

import static com.snapshot.cluster.constants.ClusterCommands.CURRENT_CONTEXT;
import static com.snapshot.cluster.constants.ClusterCommands.KUBE_CONFIG_FILE;

import com.snapshot.cluster.KubernetesClient;
import com.snapshot.cluster.models.PodDetails;
import com.snapshot.cluster.models.SocketLogsModal;
import io.kubernetes.client.ApiClient;
import io.kubernetes.client.ApiException;
import io.kubernetes.client.Configuration;
import io.kubernetes.client.PodLogs;
import io.kubernetes.client.models.V1Container;
import io.kubernetes.client.models.V1Pod;
import io.kubernetes.client.util.Config;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Slf4j
public class LiveLogsController {

  private static Map<String, SocketLogsModal> loggingTracker = new HashMap<>();
  @Autowired
  SimpMessagingTemplate template;
  @Autowired
  KubernetesClient client;

  public boolean setUpSession(String sessionId, String podName) {
    boolean isARerun = false;
    if (loggingTracker.get(sessionId) != null) {
      log.info("Restarting logging for session: " + sessionId + " for pod : " + podName);
      loggingTracker.get(sessionId).setRunning(true);
      isARerun = true;
    } else {
      loggingTracker.put(sessionId, new SocketLogsModal(sessionId));
      log.info("Starting logging for session: " + sessionId + " for pod : " + podName);
    }
    return isARerun;
  }

  @PostMapping("/sendLogs/{podName}")
  @CrossOrigin("http://localhost:4200")
  public void test(@PathVariable String podName, @RequestParam String sessionId) {
    String topic = "/topic/" + sessionId;
    log.info("topic created: " + topic);
    boolean isARerun = setUpSession(sessionId, podName);
    new Thread(() -> {
      try {
        ApiClient apiClient = Config.fromConfig(KUBE_CONFIG_FILE + CURRENT_CONTEXT);
        Configuration.setDefaultApiClient(apiClient);
        apiClient.getHttpClient().setReadTimeout(0, TimeUnit.SECONDS); // infinite timeout
        PodLogs logs = new PodLogs();
        PodDetails details = client.getPodDetails().get(podName);
        V1Pod pod = client.getApi().readNamespacedPod(details.getPodName(), details.getNamespace(),
            null, null, null);
        InputStream is;
        if (!isARerun) {
          is = logs.streamNamespacedPodLog(details.getNamespace(), details.getPodName(),
              ((V1Container) pod.getSpec().getContainers().get(0)).getName(), null, 1500, false);
        } else {
          int sinceSeconds = loggingTracker.get(sessionId).getSeconds();
          log.info("Sending logs for last " + sinceSeconds + " seconds");
          is = logs.streamNamespacedPodLog(details.getNamespace(), details.getPodName(),
              ((V1Container) pod.getSpec().getContainers().get(0)).getName(), null, sinceSeconds,
              false);
        }
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(is));
        String line = null;
        while (loggingTracker.get(sessionId).isRunning()) {
          if ((line = bufferedReader.readLine()) != null) {
            template.convertAndSend(topic, line);
          }
        }
        bufferedReader.close();
      } catch (IOException | ApiException e) {
        e.printStackTrace();
      } finally {
        template.convertAndSend(topic, "Session terminated !!");
      }
    }).start();
  }


  public ResponseEntity<String> sendLogs(@PathVariable String podName,
      @RequestParam String sessionId) {
    boolean isARerun = false;
    setUpSession(sessionId, podName);
    PodDetails pod = client.getPodDetails().get(podName);
    String topic = "/topic/" + sessionId;
    log.info("topic created: " + topic);
    boolean finalIsARerun = isARerun;
    Thread t = new Thread(() -> {
      String logLine = null;
      try {
        if (finalIsARerun) {
          int sinceSeconds = loggingTracker.get(sessionId).getSeconds();
          log.info("Sending logs for last " + sinceSeconds + " seconds");
          logLine = client.getApi()
              .readNamespacedPodLog(pod.getPodName(), pod.getNamespace(), null, null, null, null,
                  null, sinceSeconds, null, true);

        } else {
          logLine = client.getApi()
              .readNamespacedPodLog(pod.getPodName(), pod.getNamespace(), null, null, null, null,
                  null, null, 500, true);

        }
        if (StringUtils.isNotBlank(logLine)) {
          this.template.convertAndSend(topic, logLine);
          log.info("Sent all logs first " + loggingTracker.get(sessionId).getCount());
          loggingTracker.get(sessionId).setCount(loggingTracker.get(sessionId).getCount() + 1);
        }
      } catch (ApiException e) {
        e.printStackTrace();
      }
      while (loggingTracker.get(sessionId).isRunning()) {
        try {
          logLine = client.getApi()
              .readNamespacedPodLog(pod.getPodName(), pod.getNamespace(), null, null,
                  null, null, null, 1, null, true);
        } catch (ApiException e) {
          e.printStackTrace();
        }
        if (StringUtils.isNotBlank(logLine)) {
          this.template.convertAndSend(topic, logLine);
          log.info("log instance : " + loggingTracker.get(sessionId).getCount());
          loggingTracker.get(sessionId).setCount(loggingTracker.get(sessionId).getCount() + 1);
        }
        try {
          Thread.sleep(950);
        } catch (InterruptedException e) {
          e.printStackTrace();
        }
      }
      this.template.convertAndSend(topic, "Socket closed!!");
      log.info("Socket closed!!");
    });
    t.start();
    log.info("Connection established successfully for pod: " + pod.getPodName());
    return new ResponseEntity<>("Connection established successfully", HttpStatus.CREATED);
  }

  @PostMapping("/pauseLogs/{podName}")
  @CrossOrigin("http://localhost:4200")
  public void pauseLogs(@PathVariable String podName, @RequestParam String sessionId) {
    loggingTracker.get(sessionId).setRunning(false);
    loggingTracker.get(sessionId).setLastStopTime(new Date());
    log.info("Pausing logs for session : " + sessionId + " for pod " + podName);
  }

  @PostMapping("/stopLogs/{podName}")
  @CrossOrigin("http://localhost:4200")
  public ResponseEntity<String> stopLogs(@PathVariable String podName,
      @RequestParam String sessionId) {
    loggingTracker.get(sessionId).setRunning(false);
    log.info("Connection closed successfully for pod " + podName);
    loggingTracker.remove(sessionId);
    return new ResponseEntity<>("Connection closed successfully", HttpStatus.ACCEPTED);
  }

  @GetMapping("/stopLogs")
  @CrossOrigin("http://localhost:4200")
  public void clearSocketSessions(@RequestParam List<String> trackedSessionList) {
    loggingTracker.forEach((s, v) -> {
      if (trackedSessionList.indexOf(s) < 0) {
        v.setRunning(false);
      }
    });
  }
}
