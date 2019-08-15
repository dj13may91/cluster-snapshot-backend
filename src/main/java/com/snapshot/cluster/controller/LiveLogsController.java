package com.snapshot.cluster.controller;

import com.snapshot.cluster.KubernetesClient;
import com.snapshot.cluster.models.PodDetails;
import com.snapshot.cluster.models.SocketLogsModal;
import io.kubernetes.client.ApiException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
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
public class LiveLogsController {

  @Autowired
  SimpMessagingTemplate template;

  @Autowired
  KubernetesClient client;

  Map<String, SocketLogsModal> loggingTracker = new HashMap<>();

  @PostMapping("/sendLogs/{podName}")
  @CrossOrigin("http://localhost:4200")
  public ResponseEntity<String> sendLogs(@PathVariable String podName,
      @RequestParam String sessionId) {
    boolean isARerun = false;
    if (loggingTracker.get(sessionId) != null) {
      System.out.println("Restarting logging for session: " + sessionId + " for pod : " + podName);
      loggingTracker.get(sessionId).setRunning(true);
      isARerun = true;
    } else {
      loggingTracker.put(sessionId, new SocketLogsModal(sessionId));
      System.out.println("Restarting logging for session: " + sessionId + " for pod : " + podName);
    }
    PodDetails pod = client.podDetails.get(podName);
    String topic = "/topic/" + sessionId;
    System.out.println("topic created: " + topic);
    boolean finalIsARerun = isARerun;
    Thread t = new Thread(() -> {
      String logLine = null;
      try {
        if (finalIsARerun) {
          System.out.println("Sending logs for last " + loggingTracker.get(sessionId).getSeconds() + " seconds");
          logLine = client.getApi()
              .readNamespacedPodLog(pod.getPodName(), pod.getNamespace(), null, null, null, null,
                  null, loggingTracker.get(sessionId).getSeconds(), null, true);

        } else {
          logLine = client.getApi()
              .readNamespacedPodLog(pod.getPodName(), pod.getNamespace(), null, null, null, null,
                  null, null, 1000, true);

        }
        if (StringUtils.isNotBlank(logLine)) {
          this.template.convertAndSend(topic, logLine);
          System.out.println("Sent all logs first " + loggingTracker.get(sessionId).getCount());
          loggingTracker.get(sessionId).count++;
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
          System.out.println(loggingTracker.get(sessionId).getCount());
          loggingTracker.get(sessionId).count++;
        }
        try {
          Thread.sleep(950);
        } catch (InterruptedException e) {
          e.printStackTrace();
        }
      }
      this.template.convertAndSend(topic, "Socket closed!!");
      System.out.println("Socket closed!!");
    });
    t.start();
    System.out.println("Connection established successfully for pod: " + pod.getPodName());
    return new ResponseEntity<>("Connection established successfully", HttpStatus.CREATED);
  }

  @PostMapping("/stopLogs/{podName}")
  @CrossOrigin("http://localhost:4200")
  public ResponseEntity<String> stopLogs(@PathVariable String podName,
      @RequestParam String sessionId) {
    loggingTracker.get(sessionId).setRunning(false);
    System.out.println("Connection closed successfully for pod " + podName);
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
