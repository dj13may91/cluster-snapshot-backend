package com.snapshot.cluster.models;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ClusterCommandModel {

  private String commandName;
  private String commandValue;
  private String log;

  public ClusterCommandModel(String commandName, String commandValue) {
    this.commandName = commandName;
    this.commandValue = commandValue;
  }
}
