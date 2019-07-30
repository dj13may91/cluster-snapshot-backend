package com.snapshot.cluster.helper;

import com.snapshot.cluster.ClusterCommands;
import com.snapshot.cluster.KubernetesClient;
import com.snapshot.cluster.TerminalInstance;
import com.snapshot.cluster.models.Services;
import java.io.BufferedReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ConcurrentHashMap;
import javax.annotation.PostConstruct;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
@Slf4j
@Data
public class ServiceHelper {

  private static String ingressIp;
  @Autowired
  KubernetesClient client;
  @Autowired
  TerminalInstance instance;
  private ConcurrentHashMap<String, Services> serviceDetails = new ConcurrentHashMap<>();

  @PostConstruct
  public void setServices() {
    Thread svcThread = new Thread(() -> {
      try {
        BufferedReader reader = instance.getBIS(ClusterCommands.GET_ALL_SERVICES);
        List<Services> serviceObjects = createServiceObjects(reader);
        serviceObjects.stream().parallel().forEach(svc -> {
          if (StringUtils.isNotBlank(svc.getName())) {
            svc.setServiceCommand(
                String.format("kubectl describe svc %s -n %s", svc.getName(), svc.getNamespace()));
            String svcName = svc.getName();
            try {
              svc.setLogs(client.getApi()
                  .readNamespacedService(svc.getName(), svc.getNamespace(), null, null, null)
                  .toString());
            } catch (Exception e1) {
              svc.setLogs(svc.getName() + "<b>Can not read logs for " + svc.getName() + " </b>");
            }
            serviceDetails.put(ClusterCommands.getCommandToDescribeService(svc), svc);
            System.out.println("Finished Creating logs for service: " + svcName);
          }
        });
//        log.info(String.valueOf(serviceDetails));
      } catch (Exception e) {
        log.error("error generating service logs");
      }
    });
    svcThread.start();
  }

  public List<Services> createServiceObjects(BufferedReader reader) throws IOException {
    String line;
    int count = 0;
    List<Services> servicesListDetails = new ArrayList<>();
    while ((line = reader.readLine()) != null) {
      if (count > 0) {
        Services services = new Services(line.split(" "));
        servicesListDetails.add(services);
        if (services.getName().toLowerCase().contains("ingress")
            && services.getName().toLowerCase().contains("nginx")) {
          System.out.println("---Setting ingress ip to :" + services.getClusterIp());
          ingressIp = services.getClusterIp();
        }
      }
      count++;
    }
    return servicesListDetails;
  }

}