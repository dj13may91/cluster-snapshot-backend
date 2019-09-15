package com.snapshot.cluster.models;

import lombok.Data;

@Data
public class ConfigMaps {

  private String namespace;
  private String name;
  private String data;
  private String age;

  public ConfigMaps(String[] split) {
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
            this.setData(currentLine);
            index++;
            break;
          case 3:
            this.setAge(currentLine);
            index++;
            break;
          default: break;
        }
      }
    }
  }
}
