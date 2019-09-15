package com.snapshot.cluster.models;

import lombok.Data;

@Data
public class PodMemoryDetail {

  private String namespace;
  private String name;
  private String cpuCores;
  private String memoryInBytes;

  public PodMemoryDetail(String[] split) {
    int index = 0;
    for (String currentLine : split) {
      if (!currentLine.trim().equals("")) {
        switch (index) {
          case 0:
            this.setNamespace(currentLine);
            index++;
            break;
          case 1:
            this.setName(currentLine);
            index++;
            break;
          case 2:
            this.setCpuCores(currentLine);
            index++;
            break;
          case 3:
            this.setMemoryInBytes(currentLine);
            index++;
            break;
          default: break;
        }
      }
    }
  }
}
