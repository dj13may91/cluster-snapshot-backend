import {Component, OnInit} from '@angular/core';
import {PodService} from "./pod.service";
import {SnapshotService} from "../shared/snapshot.service";
import {PodBackendClientComponent} from "../backend-client/pod-backend-client.component";
import {NotificationModel} from "../shared/NotificationModel";

@Component({
  selector: 'app-pod-data-container',
  templateUrl: './pod-data-container.component.html',
  styleUrls: ['./pod-data-container.component.scss']
})
export class PodDataContainerComponent implements OnInit {

  public podList: PodService[];

  public searchText: string;
  public lastRefresh = new Date();

  constructor(public podBackendClient: PodBackendClientComponent, public snapshot: SnapshotService) {
    if (this.snapshot.podList) {
      this.podList = this.snapshot.podList;
      console.log("found old podModal details. No. of pods running: " + this.podList.length);
    } else {
      console.log('calling backend to get pods data')
      this.podBackendClient.getPodMetadata().subscribe(
        (podServices: PodService[]) => {
          this.podList = this.sortArray(podServices);
          this.snapshot.podList = podServices;
          console.log("list", this.podList);
          this.getAllPodLogs();
        },
        (error) => {
          console.log("error getting podMetadata", error);
          var pod = new PodService();
          pod.podName = 'DummyPod123';
          pod.namespace = 'kNameSpace';
          pod.logs = new Date() + ': Something is happening';
          pod.ready = '0/1';
          pod.restarts = 5;
          this.snapshot.podList = [];
          this.snapshot.podList.push(pod);
        }
      );
    }
  }

  ngOnInit() {
  }

  getAllPodLogs() {
    console.log('fetching podModal logs for ' + this.podList.length + ' pods');
    for (let pod of this.podList) {
      if (!pod.logs) this.getPodLogs(pod);
    }
  }

  getPodLogs(pod: PodService) {
    const index = this.podList.indexOf(pod);
    this.podList[index].logs = 'Fetching new logs....';
    this.podBackendClient.getPodLogs(pod.podName).subscribe(
      (response: string) => this.podList[index].logs = response,
      (error) => console.log("error getting logs: ", error)
    );
  }

  refreshPodDetails() {
    this.lastRefresh = new Date();
    this.snapshot.addNewNotification(new NotificationModel(NotificationModel.SUCCESS, "Request to refresh podModal details"));
    this.podBackendClient.refreshPodDetails().subscribe(
      (podServices: PodService[]) => {
        this.podList = [];
        this.snapshot.podList = [];
        this.podList.push(...this.sortArray(podServices));
        this.snapshot.podList.push(...podServices);
        console.log("list", this.podList);
        this.getAllPodLogs();
        this.snapshot.addNewNotification(new NotificationModel(NotificationModel.SUCCESS, "Request to refresh podModal details"));
        console.log('Refreshed pods data');
      },
      (error) => {
        console.log("error refreshing podModal logs ", error);
        this.snapshot.addNewNotification(new NotificationModel(NotificationModel.ERROR, "Error refreshing podModal details"));
      }
    )
  }

  refreshPodLogs(pod: PodService) {
    const index = this.podList.indexOf(pod);
    this.podList[index].logs = 'Refreshing logs....';
    this.podBackendClient.refreshPodLogs(pod.podName).subscribe(
      (response: string) => {
        pod.logs = response;
        this.snapshot.addNewNotification(new NotificationModel(NotificationModel.SUCCESS, "Fetched new logs for podModal " + pod.podName));
      },
      (error) => {
        console.log("error refreshing podModal logs ", error);
        this.snapshot.addNewNotification(new NotificationModel(NotificationModel.ERROR, "Error fetching logs for podModal " + pod.podName));
      }
    )
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  private sortArray(arr: PodService[]) {
    return arr.sort((a: PodService, b: PodService) => {
      if (a.podName > b.podName)
        return 1;
      else
        return -1;
    });
  }

  checkReady(pod: PodService): boolean {
    const split = pod.ready.split("/");
    return !(split[0] === split[1]);
  }
}
