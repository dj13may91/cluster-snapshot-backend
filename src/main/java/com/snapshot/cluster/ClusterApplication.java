package com.snapshot.cluster;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;

@SpringBootApplication
@EnableWebSocketMessageBroker
public class ClusterApplication {

  public static void main(String[] args) {
    SpringApplication.run(ClusterApplication.class, args);
  }

}
