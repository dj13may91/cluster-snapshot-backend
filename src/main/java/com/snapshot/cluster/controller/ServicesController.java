package com.snapshot.cluster.controller;

import com.snapshot.cluster.KubernetesClient;
import com.snapshot.cluster.TerminalInstance;
import com.snapshot.cluster.helper.ServiceHelper;
import com.snapshot.cluster.models.Services;
import java.io.IOException;
import java.util.Collection;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Slf4j
@CrossOrigin("http://localhost:4200")
public class ServicesController {

  @Autowired
  KubernetesClient client;

  @Autowired
  TerminalInstance instance;

  @Autowired
  ServiceHelper serviceHelper;

  @GetMapping("/services")
  @CrossOrigin("http://localhost:4200")
  public Collection<Services> getPodDetails() throws IOException {
    return serviceHelper.getServiceDetails().values();
  }
}
