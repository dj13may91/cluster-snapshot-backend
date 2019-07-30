package com.snapshot.cluster;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.concurrent.TimeUnit;
import org.springframework.stereotype.Service;

@Service
public class TerminalInstance {

  public StringBuilder getCommandOutput(String command) throws IOException {
    BufferedReader reader = getBIS(command);
    String line;
    StringBuilder output = new StringBuilder();
    while ((line = reader.readLine()) != null) {
      output.append("\n").append(line);
    }
    return output;
  }

  public BufferedReader getBIS(String command) throws IOException {
    ProcessBuilder builder = new ProcessBuilder(command.split(" "));
    builder.redirectErrorStream(true);
    Process process = builder.start();
    try {
      process.waitFor(30, TimeUnit.SECONDS);
    } catch (InterruptedException e) {
      System.out.println("Interrupted running : " + command + " Error : " + e.getMessage());
    }
    return new BufferedReader(new InputStreamReader(process.getInputStream()));
  }
}
