package com.snapshot.cluster.models;

import com.snapshot.cluster.Tags;
import io.kubernetes.client.models.V1ContainerStatus;
import io.kubernetes.client.models.V1Pod;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;
import org.joda.time.DateTime;

@Data
@Slf4j
public class PodDetails {

  private String namespace;
  private String podName;
  private String ready;
  private String status;
  private int restarts;
  private String age;
  private String IP;
  private String node;
  private String podMemory;
  private String colour = "blue";
  private String logs;
  private String icon = " ";
  private String podCommand = "";
  private boolean isDeleted = false;
  private UUID podId = UUID.randomUUID();
  private List<Integer> containerPort = new ArrayList<>();

  public PodDetails(V1Pod v1Pod) {
    setPodName(v1Pod.getMetadata().getName());
    setNamespace(v1Pod.getMetadata().getNamespace());
    final int[] readyCount = {0};
    try {
      v1Pod.getStatus().getContainerStatuses()
          .forEach(containerStatus -> readyCount[0] += containerStatus.isReady() ? 1 : 0);
      setReady(readyCount[0] + "/" + v1Pod.getStatus().getContainerStatuses().size());
    } catch (NullPointerException e) {
      setReady("NaN");
//      e.printStackTrace();
    }

    setAge(getAge(v1Pod.getStatus().getStartTime()));
    V1ContainerStatus conStatus;
    try {
      conStatus = v1Pod.getStatus().getContainerStatuses().get(0);
      if (conStatus.getState().getTerminated() != null) {
        setStatus(conStatus.getState().getTerminated().getReason());
      } else if (conStatus.getState().getRunning() != null) {
        setStatus("Running");
      } else if (conStatus.getState().getWaiting() != null) {
        setStatus(conStatus.getState().getWaiting().getReason());
      } else {
        setStatus("Error generating status!");
      }
      setRestarts(conStatus.getRestartCount());
    } catch (Exception e) {
      setStatus("Error generating status!");
      log.error(e.getMessage());
//      e.printStackTrace();
    }
    setIP(v1Pod.getStatus().getPodIP());
    setNode(v1Pod.getSpec().getNodeName());
  }

  public static String getAge(DateTime creationTime) {
    try{
      long podAge = (new Date().getTime() - creationTime.toDate().getTime()) / 1000;
      if (podAge >= (60 * 60 * 24)) {
        podAge = podAge / (60 * 60 * 24);
        return podAge + "d";
      } else if (podAge >= (60 * 60)) {
        podAge = podAge / 3600;
        return podAge + "h";
      } else if (podAge >= 60) {
        podAge = podAge / 60;
        return (podAge + "m");
      } else {
        return (podAge + "s");
      }
    }catch (NullPointerException e){
      return "NaN";
    }
  }

  public void updatePod(String memoryInBytes) {
    setPodMemory(memoryInBytes);
    if (getRestarts() != 0) {
      setIcon(Tags.Restarts);
      setPodMemory(getPodMemory() + "<br><b>Number of restarts: " + getRestarts() + " </b>");
    }
    long memoryUsage;
    try {
      memoryUsage = Long.parseLong(getPodMemory().split("Mi")[0]);
      if (memoryUsage > 1000) {
        setIcon(getIcon() + Tags.HighMemoryUsage);
      } else if (memoryUsage > 500) {
        setIcon(getIcon() + Tags.MediumMemoryUsage);
      } else {
        setIcon(getIcon() + Tags.LowMemoryUsage);
      }
    } catch (Exception e) {
      System.out.println("Update Pod: " + podName + ". Exception" + e.getMessage());
      setIcon(getIcon() + Tags.MemoryNotFound);
    }
    if (!getStatus().equalsIgnoreCase("Running")) {
      setPodMemory(getPodMemory() + "<br>Reason of restarts: " + getStatus());
      setIcon(getIcon() + Tags.CrashLoopBackOff);
    }
  }

  public String getGetPodLogsCommand() {
    return "kubectl logs -n " + this.getNamespace() + " " + this.getPodName() + " --tail=1000";
  }

  public String getPodCommand() {
    return getGetPodLogsCommand();
  }
}
