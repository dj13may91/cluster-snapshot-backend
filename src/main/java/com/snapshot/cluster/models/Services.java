package com.snapshot.cluster.models;

import lombok.Data;

@Data
public class Services {

  String namespace;
  String name;
  String type;
  String clusterIp;
  String externalIp;
  String ports;
  String age;
  String logs;
  String serviceCommand;

  public Services(String[] split) {
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
            this.setType(currentLine);
            index++;
            break;
          case 3:
            this.setClusterIp(currentLine);
            index++;
            break;
          case 4:
            this.setExternalIp(currentLine);
            index++;
            break;
          case 5:
            this.setPorts(currentLine);
            index++;
            break;
          case 6:
            this.setAge(currentLine);
            index++;
            break;
          default: break;
        }
      }
    }
  }
}
