package com.snapshot.cluster;

import com.snapshot.cluster.models.ConfigMaps;
import com.snapshot.cluster.models.PodDetails;
import com.snapshot.cluster.models.Services;
import java.util.Map;
import java.util.TreeMap;

public class ClusterCommands {

  public static final String CLUSTER_NAME = "kubectl config current-context";
  public static final String HELM_CHARTS_ALL_NAMESPACES = "helm ls --all";
  public static final String GET_ALL_PODS = "kubectl get pods --all-namespaces -o wide";
  public static final String GET_ALL_PODS_SECA = "kubectl get pods -n seca";
  public static final String GET_ALL_PVC = "kubectl get persistentvolumes";
  public static final String GET_ALL_NODES = "kubectl get nodes";
  public static final String GET_CLUSTER_INFO = "kubectl cluster-info";
  public static final String GET_ALL_CONFIG_MAPS = "kubectl get configmaps --all-namespaces";
  public static final String GET_MEMORY_OF_PODS = "kubectl top podService --all-namespaces";
  public static final String GET_ALL_SERVICES = "kubectl get svc --all-namespaces";
  public static final String GET_NODE_MEMORY_DETAILS = "kubectl top nodes";
  public static final String GET_PERSISTENT_VOLUMES = "kubectl get pvc --all-namespaces";

  public static Map<String, String> clusterCommandsMap = new TreeMap<>();

  static {
    clusterCommandsMap.put("clusterName", "kubectl config current-context");
//    clusterCommandsMap.put("helmChartsAllNamespaces", "helm ls --all");
    clusterCommandsMap.put("getAllPods", "kubectl get pods --all-namespaces -o wide");
    clusterCommandsMap.put("getAllPodsPlatform", "kubectl get pods -n seca");
    clusterCommandsMap.put("getAllPVC", "kubectl get persistentvolumes");
    clusterCommandsMap.put("getAllNodes", "kubectl get nodes");
    clusterCommandsMap.put("getClusterInfo", "kubectl cluster-info");
    clusterCommandsMap.put("getAllConfigMaps", "kubectl get configmaps --all-namespaces");
    clusterCommandsMap.put("getMemoryOfPods", "kubectl top pod --all-namespaces");
    clusterCommandsMap.put("getAllServices", "kubectl get svc --all-namespaces");
    clusterCommandsMap.put("getNodeMemoryDetails", "kubectl top nodes");
    clusterCommandsMap.put("getPersistentVolumes", "kubectl get pvc --all-namespaces");
    clusterCommandsMap.put("getAllDaemonSets", "kubectl get daemonset --all-namespaces");
    clusterCommandsMap.put("getStatefulSets", "kubectl get statefulsets --all-namespaces");
    clusterCommandsMap.put("getEverything", "kubectl get all --all-namespaces");
    clusterCommandsMap.put("getAllReplicaSets", "kubectl get replicasets --all-namespaces");
    clusterCommandsMap.put("getCurrentEvents", "kubectl get events --all-namespaces");
  }

  public static String getCommandToDescribeConfigMap(ConfigMaps configMap) {
    return "kubectl describe configmaps " + configMap.getName() + " -n " + configMap.getNamespace();
  }

  public static String getGetDescribePodCommand(PodDetails pod) {
    return "kubectl describe po/" + pod.getPodName() + " -n " + pod.getNamespace();
  }

  public static String getGetPodEnvironmentCommand(PodDetails pod) {
    return "kubectl exec " + pod.getPodName() + " env -n " + pod.getNamespace();
  }

  public static String getCommandToDescribeService(Services svc) {
    return "kubectl describe svc " + svc.getName() + " -n " + svc.getNamespace();
  }

  public static String getCommandToDescribeSecret(String secretname, String namespace) {
    return "kubectl describe secret " + secretname + " -n " + namespace;
  }
}
