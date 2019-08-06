package com.snapshot.cluster.models;

import com.snapshot.cluster.Tags;
import io.kubernetes.client.models.V1ContainerStatus;
import io.kubernetes.client.models.V1Pod;
import java.util.Date;
import java.util.UUID;
import lombok.Data;

@Data
public class PodDetails {

  String namespace;
  String podName;
  String ready;
  String status;
  int restarts;
  String age;
  String IP;
  String node;
  String podMemory;
  String colour = "blue";
  String logs;
  String icon = " ";
  String podCommand = "";
  boolean isDeleted = false;
  UUID podId = UUID.randomUUID();

  public PodDetails(V1Pod v1Pod) {
    PodDetails podDetails = this;
    setPodName(v1Pod.getMetadata().getName());
    setNamespace(v1Pod.getMetadata().getNamespace());
    V1ContainerStatus conStatus = v1Pod.getStatus().getContainerStatuses().get(0);
    final int[] readyCount = {0};
    v1Pod.getStatus().getContainerStatuses()
        .forEach(status -> readyCount[0] += status.isReady() ? 1 : 0);

    setReady(readyCount[0] + "/" + v1Pod.getStatus().getContainerStatuses().size());

    long age = (new Date().getTime() - v1Pod.getStatus().getStartTime().toDate().getTime()) / 1000;

    if (age >= (60 * 60 * 24)) {
      age = age / (60 * 60 * 24);
      setAge(age + "d");
    } else if (age >= (60 * 60)) {
      age = age / 3600;
      setAge(age + "h");
    } else if (age >= 60) {
      age = age / 60;
      setAge(age + "s");
    }

    if (conStatus.getState().getTerminated() != null) {
      setStatus(conStatus.getLastState().getTerminated().getReason());
    } else if (conStatus.getState().getRunning() != null) {
      setStatus("Running");
    } else if (conStatus.getState().getWaiting() != null) {
      setStatus(conStatus.getState().getWaiting().getReason());
    }
    setIP(v1Pod.getStatus().getPodIP());
    setRestarts(conStatus.getRestartCount());
    setNode(v1Pod.getSpec().getNodeName());
  }

  public PodDetails(String[] split) {
    int index = 0;
    for (String currentLine : split) {
      if (!currentLine.trim().equals("")) {
        switch (index) {
          case 0:
            this.setNamespace(currentLine);
            index++;
            break;
          case 1:
            this.setPodName(currentLine);
            index++;
            break;
          case 2:
            this.setReady(currentLine);
            index++;
            break;
          case 3:
            this.setStatus(currentLine);
            index++;
            break;
          case 4:
            try {
              this.setRestarts(Integer.parseInt(currentLine));
            } catch (Exception e) {
              this.setRestarts(-1);
            }
            index++;
            break;
          case 5:
            this.setAge(currentLine);
            index++;
            break;
          case 6:
            this.setIP(currentLine);
            index++;
            break;
          case 7:
            this.setNode(currentLine);
            index++;
            break;
        }
      }
    }

    this.setPodCommand(getGetPodLogsCommand());
  }

  public void UpdatePod(String memory_in_bytes) {
    setPodMemory(memory_in_bytes);
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
      System.out.println("Update Pod: " + podName.toString() + ". Exception" + e.getMessage());
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
