package com.snapshot.cluster.models;

import com.snapshot.cluster.constants.ClusterCommands;
import io.kubernetes.client.models.V1DeploymentCondition;
import java.util.List;
import lombok.Data;

@Data
public class Services {

  private String namespace;
  private String name;
  private String type;
  private String clusterIp;
  private String externalIp;
  private String ports;
  private String age;
  private String logs;
  private String serviceCommand;

  private int replicas;
  private int availableReplicas;
  private String image;
//  private List<V1DeploymentCondition> deploymentStatuses;
//  private DeploymentResourceDetails limits;
//  private DeploymentResourceDetails requests;
//  private List<DeploymentResourceDetails> resourceDetails;

  public String getServiceCommand() {
    return ClusterCommands.getCommandToDescribeService(this);
  }
}
