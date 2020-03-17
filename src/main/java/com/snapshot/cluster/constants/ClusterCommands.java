package com.snapshot.cluster.constants;

import com.snapshot.cluster.models.ConfigMaps;
import com.snapshot.cluster.models.PodDetails;
import com.snapshot.cluster.models.Services;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;
import lombok.Setter;

@Setter
public class ClusterCommands {

  public static final List<String> WATCHABLE_NAMESPACES =  new ArrayList<String>() {{
    add("seca");
  }};

  public static final String CLUSTER_NAME = "kubectl config current-context";
  public static final String HELM_CHARTS_ALL_NAMESPACES = "helm ls --all";
  public static final String GET_ALL_PODS = "kubectl get pods --all-namespaces -o wide";
  public static final String GET_ALL_PODS_SECA = "kubectl get pods -n soar";
  public static final String GET_ALL_PVC = "kubectl get persistentvolumes";
  public static final String GET_ALL_NODES = "kubectl get nodes";
  public static final String GET_CLUSTER_INFO = "kubectl cluster-info";
  public static final String GET_ALL_CONFIG_MAPS = "kubectl get configmaps --all-namespaces";
  public static final String GET_MEMORY_OF_PODS = "kubectl top podService --all-namespaces";
  public static final String GET_ALL_SERVICES = "kubectl get svc --all-namespaces";
  public static final String GET_NODE_MEMORY_DETAILS = "kubectl top nodes";
  public static final String GET_PERSISTENT_VOLUMES = "kubectl get pvc --all-namespaces";
  public static final String GET_DEPLOYMENTS = "kubectl get deployments --all-namespaces";
  public static final String SERVICE_CMD = "kubectl describe svc %s -n %s";
  public static String CURRENT_CONTEXT = "p22-k8s-key";
  public static String KUBE_CONFIG_FILE = "C:\\Users\\djain\\IdeaProjects\\cluster-snapshot-backend\\src\\main\\java\\kubeconfigs\\";
  public static String CONFIG_SETTING = " --kubeconfig " + KUBE_CONFIG_FILE;
  public static Map<String, String> clusterCommandsMap = new TreeMap<>();

  static {
    clusterCommandsMap.put("clusterName", CLUSTER_NAME);
//    clusterCommandsMap.put("helmChartsAllNamespaces", "helm ls --all");
    clusterCommandsMap.put("getAllPods", GET_ALL_PODS);
    WATCHABLE_NAMESPACES.forEach(namespace -> clusterCommandsMap.put("getAll" + namespace + "Pods", "kubectl get pods -n " + namespace));
    clusterCommandsMap.put("getAllPVC", "kubectl get persistentvolumes");
    clusterCommandsMap.put("getAllNodes", "kubectl get nodes");
    clusterCommandsMap.put("getClusterInfo", "kubectl cluster-info");
    clusterCommandsMap.put("getAllConfigMaps", "kubectl get configmaps --all-namespaces");
    clusterCommandsMap.put("getMemoryOfPods", "kubectl top pods --all-namespaces");
    clusterCommandsMap.put("getAllServices", "kubectl get svc --all-namespaces");
    clusterCommandsMap.put("getNodeMemoryDetails", "kubectl top nodes");
    clusterCommandsMap.put("getPersistentVolumes", "kubectl get pvc --all-namespaces");
    clusterCommandsMap.put("getAllDaemonSets", "kubectl get daemonset --all-namespaces");
    clusterCommandsMap.put("getStatefulSets", "kubectl get statefulsets --all-namespaces");
    clusterCommandsMap.put("getEverything", "kubectl get all --all-namespaces");
    clusterCommandsMap.put("getAllReplicaSets", "kubectl get replicasets --all-namespaces");
    clusterCommandsMap.put("getCurrentEvents", "kubectl get events --all-namespaces");
    clusterCommandsMap.put("getAllDeployments", GET_DEPLOYMENTS);
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
