package com.snapshot.cluster.Sockets;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class WebController {

//  @MessageMapping("/hello")
  @SendTo("/topic/hi")
  public Hello greeting(User user) {
    System.out.println("received message" + user.toString());
    return new Hello("Hi, " + user.getName() + "!");
  }

  @MessageMapping("/hello")
  @SendTo("/topic/hi")
  public String logs(String str) {
    System.out.println("received message" + str);
    return str;
  }
}
