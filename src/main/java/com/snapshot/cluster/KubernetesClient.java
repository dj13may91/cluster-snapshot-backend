package com.snapshot.cluster;

import static com.snapshot.cluster.constants.ClusterCommands.CURRENT_CONTEXT;
import static com.snapshot.cluster.constants.ClusterCommands.KUBE_CONFIG_FILE;

import com.snapshot.cluster.models.PodDetails;
import io.kubernetes.client.ApiClient;
import io.kubernetes.client.ApiException;
import io.kubernetes.client.apis.CoreV1Api;
import io.kubernetes.client.apis.ExtensionsV1beta1Api;
import io.kubernetes.client.models.V1Pod;
import io.kubernetes.client.models.V1Status;
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

  public static ApiClient defaultClient;

  private Map<String, PodDetails> podDetails = new ConcurrentHashMap<>();
  private Map<String, String> podLogs = new ConcurrentHashMap<>();
  private TerminalInstance instance = new TerminalInstance();
  private DumperOptions options;
  private CoreV1Api api;

  public KubernetesClient() throws IOException {
    defaultClient = Config.fromConfig(KUBE_CONFIG_FILE + CURRENT_CONTEXT);
    api = new CoreV1Api(defaultClient);
    options = new DumperOptions();
    options.setDefaultFlowStyle(DumperOptions.FlowStyle.BLOCK);
    options.setPrettyFlow(true);
  }

  public void setDefaultClient() {
    try {
      defaultClient = Config.fromConfig(KUBE_CONFIG_FILE + CURRENT_CONTEXT);
      api = new CoreV1Api(defaultClient);
    } catch (IOException e) {
      e.printStackTrace();
    }
  }

  public String deletePodByName(String podName) {
    PodDetails pod = podDetails.get(podName);
    try {
      V1Status status = getApi().deleteNamespacedPod(pod.getPodName(), pod.getNamespace(),
          null, null, null, null, null, null);
    } catch (ApiException aX) {
      System.out.println("Pod not found");
      return "Pod not found";
    } catch (Exception e) {
      try {
        log.error(e.getMessage());
        Thread.sleep(6000);
        api.readNamespacedPod(pod.getPodName(), pod.getNamespace(), null, null, null);
      } catch (ApiException apiEx) {
        if (apiEx.getMessage().equals("Not Found")) {
          System.out.println("Pod " + pod.getPodName() + " deleted");
          return "Pod " + pod.getPodName() + " deleted";
        } else {
          log.error("apiEx: " + apiEx);
          return "Error deleting pod  " + pod.getPodName();
        }
      } catch (InterruptedException ex) {
        log.error(ex.getMessage());
        return ex.getMessage();
      }
    }
    return "Pod " + pod.getPodName() + " deleted";
  }

  @PostConstruct
  public void generatePodRelatedData() throws IOException, ApiException {
    try {
      List<V1Pod> v1Pods = api
          .listPodForAllNamespaces(null, null, null, null, null, null, null, null, null)
          .getItems();
      List<PodDetails> podDetailsList = new ArrayList<>(createPodObjects(v1Pods, false).values());
      log.info("Running " + podDetailsList.size() + " pods.");
    } catch (Exception e) {
      log.error("##### ERROR : " + e.getMessage());
      e.printStackTrace();
    }
  }

  private Map<String, PodDetails> createPodObjects(List<V1Pod> v1Pods, boolean hardRefresh) {
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

    generatePodLogs(hardRefresh);
    return podDetails;
  }

  public void refreshPodDetails(boolean hardRefresh) throws ApiException {
    if (hardRefresh) {
      this.podDetails.clear();
      this.podLogs.clear();
    }
    List<V1Pod> v1Pods = api
        .listPodForAllNamespaces(null, null, null, null, null, null, null, null, null).getItems();
    createPodObjects(v1Pods, hardRefresh);
  }

  private void generatePodLogs(boolean hardRefresh) {
    Thread podLogThread = new Thread(() -> {
      podDetails.keySet().parallelStream().forEach(podName -> {
        try {
          if (StringUtils.isBlank(podLogs.get(podName)) || !hardRefresh) {
            podDetails.get(podName).setLogs(refreshPod(podDetails.get(podName)).getLogs());
            podLogs.put(podName, podDetails.get(podName).getLogs());
            log.info("POD: generated logs for " + podName);
          } else {
            log.info("POD: found old logs for " + podName);
          }
        } catch (Exception e) {
          podDetails.get(podName).setLogs("Error reading podModal logs. " + e.getMessage());
        }
      });
      log.info("Generated logs for " + podLogs.size() + " pods");
    });
    podLogThread.start();
  }

  public PodDetails refreshPod(PodDetails pod) {
    try {
      List<V1Pod> v1Pods = api
          .listPodForAllNamespaces(null, null, null, null, null, null, null, null, null).getItems();
      PodDetails finalPod = pod;
      if (v1Pods.parallelStream()
          .filter(v1Pod -> v1Pod.getMetadata().getName().equals(finalPod.getPodName())).count()
          <= 0) {
        pod.setDeleted(true);
        log.warn("Pod " + pod.getPodName() + " is deleted!");
        return pod;
      }

      pod = new PodDetails(
          api.readNamespacedPod(pod.getPodName(), pod.getNamespace(), null, null, null));
      podDetails.put(pod.getPodName(), pod);
      pod.setLogs(api.readNamespacedPodLog(pod.getPodName(), pod.getNamespace(), null, null,
          null, null, null, null, 1000, true));

    } catch (Exception e) {
      log.error(
          "POD: Error getting logs:" + pod.getPodName() + ",reason: " + e.getLocalizedMessage());
      pod.setLogs("Error getting logs, error: " + e.getLocalizedMessage());
    }
    podLogs.put(pod.getPodName(),
        StringUtils.isBlank(pod.getLogs()) ? "Unable to get logs" : pod.getLogs());
    podDetails.get(pod.getPodName()).setLogs(podLogs.get(pod.getPodName()));
    return pod;
  }

}
