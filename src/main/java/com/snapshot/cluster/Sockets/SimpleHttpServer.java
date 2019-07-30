package com.snapshot.cluster.Sockets;

import java.io.IOException;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.Date;

public class SimpleHttpServer {

  public static void main(String args[]) throws IOException {

    ServerSocket server = new ServerSocket(5000);
    System.out.println("Listening for connection on port 4200 ....");
    while (true) {
      try (Socket socket = server.accept()) {
        Date today = new Date();
        String httpResponse = "HTTP/1.1 200 OK\r\n\r\n" + today;
        socket.getOutputStream().write(httpResponse.getBytes("UTF-8"));
      }
    }
  }
}
