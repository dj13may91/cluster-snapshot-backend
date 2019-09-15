package com.snapshot.cluster.models;

import java.util.Date;
import lombok.Data;

@Data
public class SocketLogsModal {

  private int count = 0;
  private boolean isRunning = true;
  private Date startTime = new Date();
  private Date lastStopTime = new Date();
  private String sessionId;

  public SocketLogsModal(String sessionId) {
    this.sessionId = sessionId;
  }

  public int getSeconds() {
    long age = (new Date().getTime() - lastStopTime.getTime()) / 1000;
    setLastStopTime(new Date());
    if (age >= (60 * 60 * 24)) {
      age = age / (60 * 60 * 24);
      System.out.println(age + " days ?? ");
      return (int) (age * 60 * 60 * 24);
    } else if (age >= (60 * 60)) {
      age = age / 3600;
      System.out.println(age + " hours ?? ");
      return (int) (age * (60 * 60));
    } else if (age > 60) {
      age = age / 60;
      System.out.println(age + " minutes");
      return (int) (age * 60);
    }
    return (int) age;
  }
}
