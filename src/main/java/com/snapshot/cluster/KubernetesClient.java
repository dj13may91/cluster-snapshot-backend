package com.snapshot.cluster;

import com.snapshot.cluster.models.PodDetails;
import io.kubernetes.client.ApiClient;
import io.kubernetes.client.ApiException;
import io.kubernetes.client.apis.CoreV1Api;
import io.kubernetes.client.apis.ExtensionsV1beta1Api;
import io.kubernetes.client.models.V1Pod;
import io.kubernetes.client.util.Config;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentSkipListSet;
import javax.annotation.PostConstruct;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;
import org.yaml.snakeyaml.DumperOptions;

@Service
@Slf4j
@Data
public class KubernetesClient {

  static ApiClient defaultClient;

  static {
    try {
      defaultClient = Config.defaultClient();
    } catch (IOException e) {
      e.printStackTrace();
    }
  }

  public Map<String, PodDetails> podDetails = new ConcurrentHashMap<>();
  public ConcurrentHashMap<String, String> podLogs = new ConcurrentHashMap<>();
  //  @Autowired
  TerminalInstance instance = new TerminalInstance();
  boolean runLog = true;
  private DumperOptions options;
  private CoreV1Api api;

  KubernetesClient() throws IOException {
    api = new CoreV1Api(defaultClient);
    options = new DumperOptions();
    options.setDefaultFlowStyle(DumperOptions.FlowStyle.BLOCK);
    options.setPrettyFlow(true);
  }

  public static void deletePod(String podName) throws ApiException, IOException {
    ExtensionsV1beta1Api api = new ExtensionsV1beta1Api(defaultClient);
//    System.out.println(api.listNamespacedDeployment("soar", null, null,
//        null, null, null, null,
//        null, null, null)
//        .getItems().get(2));
    KubernetesClient kc = new KubernetesClient();
    try {
      kc.getApi()
          .deleteNamespacedPod("soar-rule-service-785d4b45d7-vjwtm", "soar", null, null, null, null,
              null, null);
    } catch (ApiException aX) {
      System.out.println(aX);
      System.out.println("Pod not found");
    } catch (Exception e) {
      try {
        System.out.println(e);
        Thread.sleep(5000);
        System.out.println(
            kc.api.readNamespacedPodStatus("soar-rule-service-785d4b45d7-vjwtm", "soar", null));
        Thread.sleep(3000);
        kc.api.readNamespacedPod("soar-rule-service-785d4b45d7-vjwtm", "soar", null, null, null);
      } catch (ApiException apiEx) {
        if (apiEx.getMessage().equals("Not Found")) {
          System.out.println("Pod deleted");
        } else {
          System.out.println("apiEx: " + apiEx);
        }
      } catch (InterruptedException ex) {
        ex.printStackTrace();
      }
    }
  }

  @PostConstruct
  public void getLogEnvDeploymentOfPods() throws IOException, ApiException {
    try {
      List<V1Pod> v1Pods = api
          .listPodForAllNamespaces(null, null, null, null, null, null, null, null, null)
          .getItems();
      List<PodDetails> podDetails = new ArrayList<>(createPodObjects1(v1Pods).values());
      log.info("Running " + podDetails.size() + " pods.");
    } catch (IOException e) {
      log.error("##### ERROR : " + e.getMessage());
      e.printStackTrace();
    }
  }

  public Map<String, PodDetails> createPodObjects1(List<V1Pod> v1Pods) throws IOException {

    Set<String> podNameSet = new ConcurrentSkipListSet<>(podDetails.keySet());
    v1Pods.forEach(v1Pod -> {
      PodDetails pod = new PodDetails(v1Pod);
      podDetails.put(pod.getPodName(), pod);
      podNameSet.remove(pod.getPodName());
    });

    podNameSet.forEach(podName -> {
      podDetails.get(podName).setDeleted(true);
      log.warn("Pod " + podName + " is deleted!");
    });

    generatePodLogs();
    return podDetails;
  }

  public void refreshPodDetails() throws ApiException, IOException {
    List<V1Pod> v1Pods = api
        .listPodForAllNamespaces(null, null, null, null, null, null, null, null, null).getItems();
    createPodObjects1(v1Pods);
  }

  private void generatePodLogs() {
    Thread podLogThread = new Thread(() -> {
      podDetails.keySet().parallelStream().forEach(podName -> {
        try {
          if (StringUtils.isBlank(podLogs.get(podName))) {
            podDetails.get(podName).setLogs(getPodLog(podDetails.get(podName)));
            podLogs.put(podName, podDetails.get(podName).getLogs());
            log.info("POD: generated logs for " + podName);
          } else {
            log.info("POD: found old logs for " + podName);
          }
        } catch (IOException e) {
          podDetails.get(podName).setLogs("Error reading podModal logs. " + e.getMessage());
        }
      });
      log.info("Generated logs for " + podLogs.size() + " pods");
    });
    podLogThread.start();
  }

  public String getPodLog(PodDetails pod) throws IOException {
    try {
      pod.setLogs(api.readNamespacedPodLog(pod.getPodName(), pod.getNamespace(), null, null,
          null, null, null, null, 1000, true));

    } catch (Exception e) {
      log.error(
          "Error getting logs for podModal:" + pod.getPodName() + ",reason: " + e
              .getLocalizedMessage());
      pod.setLogs("Error getting logs, error: " + e.getLocalizedMessage());
    }
    podLogs.put(pod.getPodName(),
        StringUtils.isBlank(pod.getLogs()) ? "Unable to get logs" : pod.getLogs());
    podDetails.get(pod.getPodName()).setLogs(podLogs.get(pod.getPodName()));
    return pod.getLogs();
  }

  public ConcurrentHashMap<String, String> getClusterDetails() {
    ConcurrentHashMap<String, String> clusterDetailsMap = new ConcurrentHashMap<>();
    ClusterCommands.clusterCommandsMap.values().stream().parallel().forEach(command -> {
      try {
        clusterDetailsMap.put(command, String.valueOf(instance.getCommandOutput(command)));
        log.info("Finished running: " + command);
      } catch (IOException e) {
        log.error("Failed to execute : " + command);
        clusterDetailsMap
            .put(command, "Failed to execute : " + command + " \nReason: " + e.getMessage());
      }
    });
    return clusterDetailsMap;
  }
}
