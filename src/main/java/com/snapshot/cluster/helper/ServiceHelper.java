package com.snapshot.cluster.helper;

import com.snapshot.cluster.KubernetesClient;
import com.snapshot.cluster.TerminalInstance;
import com.snapshot.cluster.constants.ClusterCommands;
import com.snapshot.cluster.models.Services;
import java.io.BufferedReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
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

  private static final String SVC_CMD = "kubectl describe svc %s -n %s";
  private static String INGRESS_IP;
  @Autowired
  KubernetesClient client;
  @Autowired
  TerminalInstance instance;
  private ConcurrentHashMap<String, Services> serviceDetails = new ConcurrentHashMap<>();

  public Map<String, Services> getServiceDetails() {
    if (serviceDetails.isEmpty()) {
      setServices();
      try {
        Thread.sleep(2500);
      } catch (InterruptedException e) {
        e.printStackTrace();
      }
    }
    return serviceDetails;
  }

  @PostConstruct
  public void setServices() {
    Thread svcThread = new Thread(() -> {
      try {
        BufferedReader reader = instance.getBIS(ClusterCommands.GET_ALL_SERVICES);
        List<Services> serviceObjects = createServiceObjects(reader);
        serviceObjects.stream().parallel().forEach(svc -> {
          if (StringUtils.isNotBlank(svc.getName())) {
            svc.setServiceCommand(String.format(SVC_CMD, svc.getName(), svc.getNamespace()));
            String svcName = svc.getName();
            try {
              svc.setLogs(client.getApi()
                  .readNamespacedService(svc.getName(), svc.getNamespace(), null, null, null)
                  .toString());
            } catch (Exception e1) {
              svc.setLogs(svc.getName() + "<b>Can not read logs for " + svc.getName() + " </b>");
              log.error("Error Service: generating logs for: " + svcName);
            }
            serviceDetails.put(ClusterCommands.getCommandToDescribeService(svc), svc);
            log.info("Service: finished Creating logs for: " + svcName);
          }
        });
      } catch (Exception e) {
        log.error("error generating service logs");
      }
    });
    svcThread.start();
  }

  private List<Services> createServiceObjects(BufferedReader reader) throws IOException {
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
          INGRESS_IP = services.getClusterIp();
        }
      }
      count++;
    }
    return servicesListDetails;
  }

}
