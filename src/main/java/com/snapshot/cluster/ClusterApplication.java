package com.snapshot.cluster;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

@SpringBootApplication
public class ClusterApplication {

  @Autowired
  KubernetesClient client;

  public static void main(String[] args) {
    ConfigurableApplicationContext context = SpringApplication.run(ClusterApplication.class, args);
  }

}
