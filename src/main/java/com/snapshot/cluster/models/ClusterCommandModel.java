package com.snapshot.cluster.models;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ClusterCommandModel {

  public String commandName;
  public String commandValue;
  public String log;

  public ClusterCommandModel(String commandName, String commandValue) {
    this.commandName = commandName;
    this.commandValue = commandValue;
  }
}
