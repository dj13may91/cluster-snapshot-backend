package com.snapshot.cluster.WIP;

import com.google.common.io.ByteStreams;
import com.snapshot.cluster.constants.ClusterCommands;
import io.kubernetes.client.ApiClient;
import io.kubernetes.client.ApiException;
import io.kubernetes.client.Configuration;
import io.kubernetes.client.PodLogs;
import io.kubernetes.client.PortForward;
import io.kubernetes.client.apis.CoreV1Api;
import io.kubernetes.client.models.V1Container;
import io.kubernetes.client.models.V1Pod;
import io.kubernetes.client.util.Config;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.ServerSocket;
import java.net.Socket;
import java.net.SocketTimeoutException;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.TimeUnit;
import org.apache.tomcat.util.http.fileupload.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;

public class Test {

  private static final int BUFFER_SIZE = 819200;
  @Autowired
  static SimpMessagingTemplate template;

  public static void main(String[] args) throws IOException, ApiException, InterruptedException {
    File folder = new File(ClusterCommands.KUBE_CONFIG_FILE);
    String[] files = folder.list();

    for (String file : files)
    {
      System.out.println(file);
    }
  }

  public static void tailLogs(PodLogs logs, InputStream is)
      throws IOException, ApiException {
    try {
      ByteStreams.copy(is, System.out);
    } catch (SocketTimeoutException ex) {
      ex.printStackTrace();
    } catch (IOException e) {
      e.printStackTrace();
    }
  }

  public static long copy(InputStream from, OutputStream to) throws IOException {
    byte[] buf = createBuffer();
    long total = 0;
    System.out.println("request");
    while (true) {
      int r = from.read(buf);
      System.out.print(r);
      if (r == -1) {
        break;
      }
      to.write(buf, 0, r);
      total += r;
      to.flush();
      System.out.println();
    }
    return total;
  }

  static byte[] createBuffer() {
    return new byte[BUFFER_SIZE];
  }

  public void clientTest() throws ApiException, IOException {
    ApiClient client = Config.fromConfig(
        "C:\\Users\\djain\\IdeaProjects\\cluster-snapshot-backend\\src\\main\\java\\kubeconfigs\\p07-eng-in03");// .defaultClient();
    Configuration.setDefaultApiClient(client);
    CoreV1Api coreApi = new CoreV1Api(client);
    client.getHttpClient().setReadTimeout(0, TimeUnit.SECONDS); // infinite timeout
    System.out.println(coreApi.listNamespace(null, null, null, null, null, null, null, null, null));

    PodLogs logs = new PodLogs();
    V1Pod pod = coreApi
        .readNamespacedPod("soar-rule-service-88585bdff-h544x", "soar", null, null, null);
    InputStream is = logs.streamNamespacedPodLog("soar", "soar-rule-service-88585bdff-h544x",
        ((V1Container) pod.getSpec().getContainers().get(0)).getName(), null, 15, false);
    IOUtils.copy(is, System.out);

    System.out.println("disconnected");
  }

  public void pfTest() throws IOException, ApiException, InterruptedException {
    //pod forward test
    ApiClient client = Config.defaultClient();
    client.getHttpClient().setReadTimeout(5, TimeUnit.SECONDS); // 0 = infinite timeout
    Configuration.setDefaultApiClient(client);
    PortForward pf = new PortForward();
    List<Integer> ports = new ArrayList<>();
    ports.add(8080);
    CoreV1Api api = new CoreV1Api(client);
    final PortForward.PortForwardResult result = pf
        .forward("soar", "soar-rule-service-795f54679c-7qr62", ports);
    ServerSocket ss = new ServerSocket(8080);
    final Socket s = ss.accept();
    System.out.println("Connected!");

    InputStream is = result.getInputStream(8080);
    OutputStream os = s.getOutputStream();
    new Thread(() -> {
      try {
        copy(result.getInputStream(8080), s.getOutputStream());
        os.flush();
      } catch (IOException ex) {
        ex.printStackTrace();
      } catch (Exception ex) {
        ex.printStackTrace();
      }
    }).start();

    new Thread(() -> {
      try {
        copy(s.getInputStream(), result.getOutboundStream(8080));
        result.getOutboundStream(8080).flush();
      } catch (IOException ex) {
        ex.printStackTrace();
      } catch (Exception ex) {
        ex.printStackTrace();
      }
    }).start();

    Thread.sleep(60 * 1000);

    System.exit(0);
  }
}
