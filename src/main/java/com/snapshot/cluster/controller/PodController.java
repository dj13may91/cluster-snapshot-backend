package com.snapshot.cluster.controller;

import com.snapshot.cluster.KubernetesClient;
import com.snapshot.cluster.TerminalInstance;
import com.snapshot.cluster.models.PodDetails;
import io.kubernetes.client.ApiException;
import java.io.IOException;
import java.util.Collection;
import java.util.Map;
import java.util.Set;
import java.util.TreeMap;
import java.util.stream.Collectors;
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
    return client.getPodDetails().values();
  }

  @GetMapping("/pods/{podName}")
  @CrossOrigin("http://localhost:4200")
  public String getPodLogs(@PathVariable String podName) {
    return client.getPodLogs().get(podName) == null ?
        client.refreshPod(client.getPodDetails().get(podName)).getLogs()
        : client.getPodLogs().get(podName);
  }

  @GetMapping("/pods/refresh")
  @CrossOrigin("http://localhost:4200")
  public Collection<PodDetails> refreshPodDetails() throws ApiException {
    log.info("Request to refresh all pods' data!");
    client.refreshPodDetails(true);
    return client.getPodDetails().values();
  }

  @GetMapping("/pods/refresh/{podName}")
  @CrossOrigin("http://localhost:4200")
  public PodDetails refreshPodLog(@PathVariable String podName) {
    log.info("POD: refreshing logs for " + podName);
    client.refreshPod(client.getPodDetails().get(podName));
    return client.getPodDetails().get(podName);
  }


  @GetMapping("/pods/namespaces")
  @CrossOrigin("http://localhost:4200")
  public Set<String> getNamespaceList() {
    return client.getPodDetails().values().stream().map(PodDetails::getNamespace)
        .collect(Collectors.toSet());
  }

  @GetMapping("/pods/nodes")
  public Map<String, Integer> getNodePodCount() {
    Map<String, Integer> nodePodCountMap = new TreeMap<>();
    client.getPodDetails().values().parallelStream().forEach(podDetails -> {
      nodePodCountMap.merge(podDetails.getNode(), 1, Integer::sum);
    });
    return nodePodCountMap;
  }
}
