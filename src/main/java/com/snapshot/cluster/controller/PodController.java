package com.snapshot.cluster.controller;

import com.snapshot.cluster.KubernetesClient;
import com.snapshot.cluster.TerminalInstance;
import com.snapshot.cluster.models.PodDetails;
import io.kubernetes.client.ApiException;
import java.io.IOException;
import java.util.Collection;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Slf4j
@CrossOrigin("http://localhost:4200")
public class PodController {

  @Autowired
  KubernetesClient client;

  @Autowired
  TerminalInstance instance;

  @GetMapping("/pods")
  @CrossOrigin("http://localhost:4200")
  public Collection<PodDetails> getPodDetails() throws IOException {
    return client.podDetails.values();
  }

  @GetMapping("/pods/{podName}")
  @CrossOrigin("http://localhost:4200")
  public String getPodLogs(@PathVariable String podName) throws IOException {
    return client.podLogs.get(podName) == null ?
        client.getPodLog(client.podDetails.get(podName))
        : client.podLogs.get(podName);
  }

  @GetMapping("/pods/refresh")
  @CrossOrigin("http://localhost:4200")
  public Collection<PodDetails> refreshPodDetails() throws IOException, ApiException {
    log.info("Request to refresh podModal data!");
    client.refreshPodDetails();
    return client.podDetails.values();
  }

  @GetMapping("/pods/refresh/{podName}")
  @CrossOrigin("http://localhost:4200")
  public String refreshPodLog(@PathVariable String podName) throws IOException {
    log.info("POD: refreshing logs for " + podName);
    return client.getPodLog(client.podDetails.get(podName));
  }

}
