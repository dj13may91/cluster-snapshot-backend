package com.snapshot.cluster;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;

@SpringBootApplication
@EnableWebSocketMessageBroker
public class ClusterApplication {

  @Autowired
  KubernetesClient client;

  public static void main(String[] args) {
    SpringApplication.run(ClusterApplication.class, args);
  }

}
