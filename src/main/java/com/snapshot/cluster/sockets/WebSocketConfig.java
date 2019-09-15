package com.snapshot.cluster.sockets;

import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {

  @Override
  public void configureMessageBroker(MessageBrokerRegistry config) {
    config.enableSimpleBroker();
//    config.setApplicationDestinationPrefixes("/");
  }

  @Override
  @CrossOrigin("http://localhost:4200")
  public void registerStompEndpoints(StompEndpointRegistry registry) {
    registry
        .addEndpoint("/gkz-stomp-endpoint", "*")
        .setAllowedOrigins("http://localhost:4200", "http://localhost:8082", "*") //works
        .withSockJS();
  }
}
