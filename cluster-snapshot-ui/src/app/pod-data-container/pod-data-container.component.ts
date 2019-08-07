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
  public timerObj;
  public autoRefresh;

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
          this.updateLastRefreshTime();
        },
        (error) => {
          console.log("error getting podMetadata", error);
          let pod = new PodService();
          pod.podName = 'DummyPod123';
          pod.namespace = 'kNameSpace';
          pod.logs = new Date() + ': Something is happening';
          pod.ready = '0/1';
          pod.restarts = 5;
          this.snapshot.podList = [];
          this.snapshot.podList.push(pod);
          this.updateLastRefreshTime();
        }
      );
    }
    this.enableAutoRefresh();
  }

  enableAutoRefresh(duration = 600000) {
    this.autoRefresh = window.setInterval(() => {
      this.snapshot.newNotifications.push(new NotificationModel(NotificationModel.SUCCESS, 'Auto refreshing pod details'));
      console.log(duration, duration);
      this.refreshPodDetails();
    }, duration);
  }

  toggleAutoRefresh() {
    if (this.snapshot.autoRefreshEnabled) {
      window.clearInterval(this.autoRefresh);
      this.autoRefresh = undefined;
      console.log('auto refresh:', this.autoRefresh);
      this.enableAutoRefresh((24 * 60 * 60 * 10000));
      console.log('this.autoRefresh set to 1day');
      this.snapshot.addNewNotification(
        (new NotificationModel(NotificationModel.WARNING, 'Auto refreshing disabled')));
    } else {
      this.enableAutoRefresh();
      this.snapshot.addNewNotification(
        new NotificationModel(NotificationModel.INFO, 'Auto refreshing enabled'));
      console.log('autoRefresh set to .1 mins');

    }
    this.snapshot.autoRefreshEnabled = !this.snapshot.autoRefreshEnabled;
  }

  refreshPodStatusChart() {
    let running = 0;
    let unstable = 0;
    let deleted = 0;
    if (this.snapshot.podList) {
      this.snapshot.podList.forEach(p => {
        if (p.deleted) deleted++;
        else if (this.isReady(p)) running++;
        else unstable++;
      });
    }
    this.snapshot.podStatusChart = [['Running', running], ['Restarting', unstable], ['Deleted', deleted]];
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
    this.podBackendClient.refreshPodDetails().subscribe(
      (podServices: PodService[]) => {
        this.podList = [];
        this.snapshot.podList = [];
        this.podList.push(...this.sortArray(podServices));
        this.snapshot.podList.push(...podServices);
        console.log("list", this.podList);
        this.getAllPodLogs();
        this.snapshot.addNewNotification(new NotificationModel(NotificationModel.SUCCESS, "Refreshed podModal details"));
        console.log('Refreshed pods data');
      },
      (error) => {
        console.log("error refreshing podModal logs ", error);
        this.snapshot.addNewNotification(new NotificationModel(NotificationModel.ERROR, "Error refreshing podModal details"));
      }
    );
    this.updateLastRefreshTime();
  }

  refreshPodLogs(pod: PodService) {
    const index = this.podList.indexOf(pod);
    this.podList[index].logs = 'Refreshing logs....';
    this.podBackendClient.refreshPodLogs(pod.podName).subscribe(
      (response: string) => {
        pod.logs = response;
        this.snapshot.addNewNotification(new NotificationModel(NotificationModel.SUCCESS,
          "logs for podModal " + pod.podName + ""));
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

  isReady(pod: PodService): boolean {
    const split = pod.ready.split("/");
    return split[0] === split[1];
  }

  updateLastRefreshTime() {
    this.refreshPodStatusChart();
    this.snapshot.podLastRefresh = new Date();
    let lrd = this.snapshot.podLastRefresh;
    window.clearInterval(this.timerObj);
    this.timerObj = window.setInterval(() => {
      let age = (new Date().getTime() - lrd.getTime()) / 1000;
      let duration = '0 sec';
      if (age >= (60 * 60 * 24)) {
        age = age / (60 * 60 * 24);
        duration = age.toFixed(0) + " day";
      } else if (age >= (60 * 60)) {
        age = age / 3600;
        duration = age.toFixed(0) + " hr";
      } else if (age >= 60) {
        age = age / 60;
        duration = age.toFixed(0) + " min";
      } else {
        duration = age.toFixed(0) + ' sec';
      }
      document.getElementById('refreshDuration').innerHTML = 'Last refreshed: ' + duration;
    }, 10000);
  }
}
