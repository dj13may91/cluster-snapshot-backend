package com.snapshot.cluster.controller;

import com.snapshot.cluster.ClusterCommands;
import com.snapshot.cluster.KubernetesClient;
import com.snapshot.cluster.Sockets.WebController;
import com.snapshot.cluster.TerminalInstance;
import com.snapshot.cluster.models.ClusterCommandModel;
import java.io.IOException;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Slf4j
@CrossOrigin("http://localhost:4200")
public class ClusterController {

  @Autowired
  WebController webController;

  @Autowired
  KubernetesClient client;

  @Autowired
  TerminalInstance instance;

  boolean sendLogs = true;

  private Map<String, String> clusterCommandLogMap = new HashMap<>();

  @GetMapping("/health")
  @CrossOrigin("http://localhost:4200")
  public String health() {
    return "ok";
  }

  @GetMapping("/commands")
  @CrossOrigin("http://localhost:4200")
  public List<ClusterCommandModel> getClusterCommands() {
    List<ClusterCommandModel> commandObjects = new LinkedList<>();
    ClusterCommands.clusterCommandsMap.forEach((k, v) -> {
      commandObjects.add(new ClusterCommandModel(k, v));
    });
    return commandObjects;
  }

  @PostMapping(value = "/commands/output", produces = "application/json")
  @CrossOrigin("http://localhost:4200")
  public ResponseEntity<String> getCommandOutput(@RequestParam String command) {
    try {
      if (clusterCommandLogMap.get(command) == null) {
        log.warn("CLUSTER COMMAND logs not found, returning logs for command: " + command);
        clusterCommandLogMap.put(command, String.valueOf(instance.getCommandOutput(command)));
      } else {
        log.info("CLUSTER COMMAND: logs found , returning logs for command: " + command);
      }
      return new ResponseEntity<>(clusterCommandLogMap.get(command), HttpStatus.OK);
    } catch (IOException e) {
      e.printStackTrace();
      return new ResponseEntity<>(
          "Error getting logs for the commandValue: " + command + " \n" + e.getMessage(),
          HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @PostMapping(value = "/commands/refresh", produces = "application/json")
  @CrossOrigin("http://localhost:4200")
  public ResponseEntity<String> refreshCommandLog(@RequestParam String command) throws IOException {
    try {
      clusterCommandLogMap.put(command, String.valueOf(instance.getCommandOutput(command)));
      log.info("Refreshing logs for command: " + command);
      return new ResponseEntity<>(clusterCommandLogMap.get(command), HttpStatus.OK);
    } catch (IOException e) {
      e.printStackTrace();
      return new ResponseEntity<>(
          "Error getting logs for the commandValue: " + command + " \n" + e.getMessage(),
          HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

}
