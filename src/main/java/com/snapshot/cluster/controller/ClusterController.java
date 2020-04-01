package com.snapshot.cluster.controller;

import com.snapshot.cluster.KubernetesClient;
import com.snapshot.cluster.TerminalInstance;
import com.snapshot.cluster.constants.ClusterCommands;
import com.snapshot.cluster.helper.ServiceHelper;
import com.snapshot.cluster.models.ClusterCommandModel;
import com.snapshot.cluster.sockets.WebController;
import io.kubernetes.client.ApiException;
import java.io.File;
import java.io.IOException;
import java.util.Arrays;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Set;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Slf4j
@CrossOrigin("http://localhost:4200")
public class ClusterController {

  final WebController webController;
  final KubernetesClient client;
  final TerminalInstance instance;
  final ServiceHelper serviceHelper;
  final ClusterCommands clusterCommands;

  private Map<String, String> clusterCommandLogMap = new HashMap<>();

  public ClusterController(WebController webController, KubernetesClient client,
      TerminalInstance instance, ServiceHelper serviceHelper, ClusterCommands clusterCommands) {
    this.webController = webController;
    this.client = client;
    this.instance = instance;
    this.serviceHelper = serviceHelper;
    this.clusterCommands = clusterCommands;
  }

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
        log.warn("CLUSTER COMMAND logs not found, returning logs for cmd: " + command);
        clusterCommandLogMap.put(command, String.valueOf(instance.getCommandOutput(command)));
      } else {
        log.info("CLUSTER COMMAND: logs found , returning logs for cmd: " + command);
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
      log.info("Refreshing logs for cmd: " + command);
      return new ResponseEntity<>(clusterCommandLogMap.get(command), HttpStatus.OK);
    } catch (IOException e) {
      e.printStackTrace();
      return new ResponseEntity<>(
          "Error getting logs for the commandValue: " + command + " \n" + e.getMessage(),
          HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }


  @GetMapping(value = "/context/list", produces = "application/json")
  @CrossOrigin("http://localhost:4200")
  public ResponseEntity<Set<String>> getContextList() {
    File folder = new File(clusterCommands.KUBE_CONFIG_FOLDER);
    Set<String> kubeConfigSet = new HashSet<>(Arrays.asList(Objects.requireNonNull(folder.list())));
    return new ResponseEntity<>(kubeConfigSet, HttpStatus.OK);
  }

  @GetMapping(value = "/context/current", produces = "application/json")
  @CrossOrigin("http://localhost:4200")
  public ResponseEntity<String> getCurrentContext() {
    log.info(" Current context set to: " + clusterCommands.CURRENT_CONTEXT);
    return new ResponseEntity<>(clusterCommands.CURRENT_CONTEXT, HttpStatus.OK);
  }

  @PostMapping(value = "/context/{currentContext}", produces = "application/json")
  @CrossOrigin("http://localhost:4200")
  public void setCurrentContext(@PathVariable String currentContext) {
    clusterCommands.CURRENT_CONTEXT = currentContext;
    log.info("setting context to " + currentContext);
    this.clusterCommandLogMap.clear();
    client.setDefaultClient();
    getClusterCommands();
    new Thread(() -> {
      try {
        client.refreshPodDetails(true);
      } catch (ApiException e) {
        log.error("Error in pod modal refresh", e);
      }
    }).start();

    new Thread(serviceHelper::generateServiceData).start();
    ClusterCommands.clusterCommandsMap.keySet().parallelStream().forEach(
        command -> {
          try {
            refreshCommandLog(ClusterCommands.clusterCommandsMap.get(command));
          } catch (IOException e) {
            log.error("Error in service modal refresh", e);
          }
        });
  }
}
