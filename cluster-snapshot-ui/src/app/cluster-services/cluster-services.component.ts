import {Component, OnInit} from '@angular/core';
import {SnapshotService} from "../shared/snapshot.service";
import {ClusterServiceBackendClient} from "../backend-client/cluster-service-backend-client";
import {ClusterServices} from "./ClusterServices";

@Component({
  selector: 'app-cluster-services',
  templateUrl: './cluster-services.component.html',
  styleUrls: ['./cluster-services.component.scss']
})
export class ClusterServicesComponent implements OnInit {

  public searchText: string;
  public clusterServiceList: ClusterServices[];


  constructor(public backend: ClusterServiceBackendClient, public snapshot: SnapshotService) {
    if (this.snapshot.clusterServiceList && this.snapshot.clusterServiceList.length > 0) {
      console.log("found old cluster services");
      this.clusterServiceList = this.snapshot.clusterServiceList;
    } else {
      this.backend.getServices().subscribe(
        (clusterServiceList: ClusterServices[]) => {
          console.log(clusterServiceList);
          this.clusterServiceList = this.sortArray(clusterServiceList);
          this.snapshot.clusterServiceList = clusterServiceList;
        },
        (error) => console.error(error)
      )
    }
  }

  ngOnInit() {
  }

  refreshLogs(service: ClusterServices) {

  }

  private sortArray(arr: ClusterServices[]) {
    return arr.sort((a: ClusterServices, b: ClusterServices) => {
      if (a.serviceCommand > b.serviceCommand) return 1;
      else return -1;
    });
  }

}
