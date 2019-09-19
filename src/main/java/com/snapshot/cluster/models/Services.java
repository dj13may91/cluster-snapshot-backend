package com.snapshot.cluster.models;

import com.snapshot.cluster.constants.ClusterCommands;
import lombok.Data;

@Data
public class Services {

  private String namespace;
  private String name;
  private String type;
  private String clusterIp;
  private String externalIp;
  private String ports;
  private String age;
  private String logs;
  private String serviceCommand;

  public Services() {
  }

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
          default:
            break;
        }
      }
    }
  }

  @Override
  public String toString() {
    return "namespace='" + namespace +
        ", name='" + name +
        ", type='" + type +
        ", clusterIp='" + clusterIp +
        ", externalIp='" + externalIp +
        ", ports='" + ports +
        ", age='" + age +
        ", logs='" + logs +
        ", serviceCommand='" + serviceCommand;
  }

  public String getServiceCommand() {
    return ClusterCommands.getCommandToDescribeService(this);
  }
}
