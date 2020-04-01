package com.snapshot.cluster.controller;

import com.snapshot.cluster.KubernetesClient;
import com.snapshot.cluster.constants.ClusterCommands;
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
  private SimpMessagingTemplate template;
  @Autowired
  private KubernetesClient client;

  private boolean setUpSession(String sessionId, String podName) {
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
        ClusterCommands cc = new ClusterCommands();
        ApiClient apiClient = Config.fromConfig(cc.KUBE_CONFIG_FOLDER + cc.CURRENT_CONTEXT);
        Configuration.setDefaultApiClient(apiClient);
        apiClient.getHttpClient().setReadTimeout(0, TimeUnit.SECONDS); // infinite timeout
        PodLogs logs = new PodLogs();
        PodDetails details = client.getPodDetails().get(podName);
        V1Pod pod = client.getApi().readNamespacedPod(details.getPodName(), details.getNamespace(),
            null, null, null);
        InputStream is;
        if (!isARerun) {
          is = logs.streamNamespacedPodLog(details.getNamespace(), details.getPodName(),
              ((V1Container) pod.getSpec().getContainers().get(0)).getName(), null, 1000, false);
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
