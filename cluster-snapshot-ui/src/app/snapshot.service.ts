import {Injectable} from '@angular/core';
import {ClusterCommand} from "./cluster-commands/cluster-command";
import {PodService} from "./pod-data-container/pod.service";
import {ClusterServices} from "./cluster-services/ClusterServices";

@Injectable({
  providedIn: 'root'
})
export class SnapshotService {

  public clusterCommandList: ClusterCommand[];
  public podList: PodService[];
  public clusterServiceList: ClusterServices[];

  constructor() {
  }
}
