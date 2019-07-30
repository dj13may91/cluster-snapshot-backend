package com.snapshot.cluster;

import io.kubernetes.client.ApiException;
import io.kubernetes.client.models.V1Service;
import java.io.IOException;

public class ServiceTest {

  public static void main(String[] args) throws IOException, ApiException {
    KubernetesClient kc = new KubernetesClient();
    V1Service v1Service = kc.getApi()
        .readNamespacedService("soar-rule-service", "soar", null, null, null);

    System.out.println(v1Service);


  }
}
