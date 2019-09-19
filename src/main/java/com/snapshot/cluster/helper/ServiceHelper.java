package com.snapshot.cluster.helper;

import com.snapshot.cluster.KubernetesClient;
import com.snapshot.cluster.TerminalInstance;
import com.snapshot.cluster.models.PodDetails;
import com.snapshot.cluster.models.Services;
import io.kubernetes.client.ApiException;
import io.kubernetes.client.models.V1Service;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.stream.Collectors;
import javax.annotation.PostConstruct;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Slf4j
@Data
@Service
public class ServiceHelper {

  private static String INGRESS_IP;
  @Autowired
  private KubernetesClient client;
  @Autowired
  private TerminalInstance instance;
  private Map<String, Services> serviceDetails = new ConcurrentHashMap<>();

  public Map<String, Services> getServiceDetails() {
    if (serviceDetails.isEmpty()) {
      generateServiceData();
    }
    return serviceDetails;
  }

  @PostConstruct
  public void generateServiceData() {
    new Thread(() -> {
      try {
        List<V1Service> serviceObjects = client.getApi()
            .listServiceForAllNamespaces(null, null, null, null, null, null, null, null, null)
            .getItems();
        serviceObjects.parallelStream().forEach(svc -> {
          Services services = createServiceObject(svc);
          serviceDetails.put(services.getServiceCommand(), services);
        });

        log.info("Running " + serviceDetails.size() + " services");
      } catch (ApiException e) {
        e.printStackTrace();
      }
    }).start();
  }

  private Services createServiceObject(V1Service service) {
    Services svc = new Services();
    svc.setName(service.getMetadata().getName());
    svc.setNamespace(service.getMetadata().getNamespace());
    svc.setClusterIp(service.getSpec().getClusterIP());
    if (service.getSpec().getExternalIPs() != null) {
      svc.setExternalIp(String.join(", ", service.getSpec().getExternalIPs()));
    }
    svc.setType(service.getSpec().getType());
    svc.setAge(PodDetails.getAge(service.getMetadata().getCreationTimestamp()));
    svc.setPorts(service.getSpec().getPorts().parallelStream()
        .map(port -> port.getNodePort() == null ? port.getPort() + "/" + port.getProtocol()
            : port.getPort() + ":" + port.getNodePort() + "/" + port.getProtocol())
        .collect(Collectors.joining(",")));

    svc.setLogs(service.toString().replaceAll("class V1Service ", "")
        .replaceAll("class V1ObjectMeta ", "")
        .replaceAll("class V1ServiceSpec ", "")
        .replaceAll("class V1ServicePort ", "")
        .replaceAll("class V1ServiceStatus ", "")
        .replaceAll("class V1LoadBalancerStatus ", ""));
    return svc;
  }
}
