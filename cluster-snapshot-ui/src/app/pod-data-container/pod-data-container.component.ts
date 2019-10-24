import {Component, OnInit} from '@angular/core';
import {PodService} from './pod.service';
import {SnapshotService} from '../shared/snapshot.service';
import {PodBackendClientComponent} from '../backend-client/pod-backend-client.component';
import {NotificationModel} from '../shared/NotificationModel';

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
  public namespaceList;
  public podStatusList = ['Running', 'Not ready', 'Deleted'];
  public nodeNameDetails: string[];
  public namespaceFilter = 'all';
  private podStatusFilter = 'all';
  private nodeFilter = 'all';

  constructor(public podBackendClient: PodBackendClientComponent, public snapshot: SnapshotService) {
    if (this.snapshot.podList) {
      this.podList = this.snapshot.podList;
      console.log('found old podModal details. No. of pods running: ' + this.podList.length);
      // this.generateNodeList();
    } else {
      console.log('calling backend to get pods data');
      this.podBackendClient.getPodMetadata().subscribe(
        (podServices: PodService[]) => {
          this.podList = PodDataContainerComponent.sortArray(podServices);
          this.snapshot.podList = podServices;
          console.log('list', this.podList);
          this.getNodeList();
          this.getAllPodLogs();
          this.updateLastRefreshTime();
        },
        (error) => {
          console.log('error getting podMetadata', error);
          const pod = new PodService();
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

  static isReady(pod: PodService): boolean {
    const split = pod.ready.split('/');
    return split[0] === split[1];
  }

  static sortArray(arr: PodService[]) {
    return arr.sort((a: PodService, b: PodService) => {
      return (a.podName > b.podName) ? 1 : -1;
    });
  }

  ngOnInit() {
    this.getNamespaceList();
  }

  enableAutoRefresh(duration = 150000) {
    console.log('autoRefresh set to: ' + (duration / 1000) + 'seconds');
    this.autoRefresh = window.setInterval(() => {
      this.refreshPodDetails();
    }, duration);
  }

  toggleAutoRefresh() {
    if (this.snapshot.autoRefreshEnabled) {
      window.clearInterval(this.autoRefresh);
      this.enableAutoRefresh((24 * 60 * 60 * 10000));
      this.snapshot.addNewNotification(
        (new NotificationModel(NotificationModel.WARNING, 'Auto refreshing disabled')));
    } else {
      this.enableAutoRefresh();
      this.snapshot.addNewNotification(
        new NotificationModel(NotificationModel.INFO, 'Auto refreshing enabled'));
    }
    this.snapshot.autoRefreshEnabled = !this.snapshot.autoRefreshEnabled;
  }

  refreshPodStatusChart() {
    let running = 0;
    let unstable = 0;
    let deleted = 0;
    if (this.snapshot.podList) {
      this.snapshot.podList.forEach(p => {
        if (p.deleted) {
          deleted++;
        } else if (PodDataContainerComponent.isReady(p)) {
          running++;
        } else {
          unstable++;
        }
      });
    }
    this.snapshot.podStatusChart = [
      [this.podStatusList[0], running],
      [this.podStatusList[1], unstable],
      [this.podStatusList[2], deleted]];
  }

  getNodeList() {
    this.podBackendClient.getNodeMap().subscribe(
      (res) => {
        this.nodeNameDetails = [...res.keys()];
      },
      error => console.log(error)
    );
  }

  getNamespaceList() {
    this.podBackendClient.getNamespaceList().subscribe(
      (response) => {
        console.log('namespaces', response);
        this.namespaceList = response;
      },
      (error) => console.log('error getting namespace list', error)
    );
  }

  getAllPodLogs() {
    console.log('fetching podModal logs for ' + this.podList.length + ' pods');
    for (const pod of this.podList) {
      if (!pod.logs) {
        this.getPodLogs(pod);
      }
    }
  }

  getPodLogs(pod: PodService) {
    const index = this.podList.indexOf(pod);
    this.podList[index].logs = 'Fetching new logs....';
    this.podBackendClient.getPodLogs(pod.podName).subscribe(
      (response: string) => this.podList[index].logs = response,
      (error) => console.log('error getting logs: ', error)
    );
  }

  refreshPodDetails() {
    this.podBackendClient.refreshPodDetails().subscribe(
      (podServices: PodService[]) => {
        this.podList = [];
        this.snapshot.podList = [];
        this.podList.push(...PodDataContainerComponent.sortArray(podServices));
        this.snapshot.podList.push(...podServices);
        console.log('list', this.podList);
        this.getNodeList();
        this.getAllPodLogs();
        this.snapshot.addNewNotification(new NotificationModel(NotificationModel.SUCCESS, 'Refreshed podModal details'));
        console.log('Refreshed pods data');
        this.updateLastRefreshTime();
      },
      (error) => {
        console.log('error refreshing podModal logs ', error);
        this.snapshot.addNewNotification(new NotificationModel(NotificationModel.ERROR, 'Error refreshing podModal details'));
      }
    );
  }

  refreshPodLogs(pod: PodService) {
    const index = this.podList.indexOf(pod);
    this.podList[index].logs = 'Refreshing pod details....';
    this.podBackendClient.refreshPodData(pod.podName).subscribe(
      (response: PodService) => {
        this.podList[index] = this.updatePodData(pod, response);
        this.refreshPodStatusChart();
        console.log('pod data: ', this.podInfo(response));
        this.snapshot.addNewNotification(new NotificationModel(NotificationModel.SUCCESS,
          'logs for podModal ' + pod.podName + ''));
      },
      (error) => {
        console.log('error refreshing podModal logs ', error);
        this.snapshot.addNewNotification(new NotificationModel(NotificationModel.ERROR, 'Error fetching logs for podModal ' + pod.podName));
      }
    );
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  isReady(pod: PodService): boolean {
    return PodDataContainerComponent.isReady(pod);
  }

  private generateNodeList(node) {

    let count = 0;
    this.podList.forEach(pod => {
      if (pod.node === node) {
        count++;
      }
    });
    return count;
  }

  private updateLastRefreshTime() {
    this.refreshPodStatusChart();
    this.snapshot.podLastRefresh = new Date();
    const lrd = this.snapshot.podLastRefresh;
    window.clearInterval(this.timerObj);
    this.timerObj = window.setInterval(() => {
      let age = (new Date().getTime() - lrd.getTime()) / 1000;
      let duration = '0 sec';
      if (age >= (60 * 60 * 24)) {
        age = age / (60 * 60 * 24);
        duration = age.toFixed(0) + ' day';
      } else if (age >= (60 * 60)) {
        age = age / 3600;
        duration = age.toFixed(0) + ' hr';
      } else if (age >= 60) {
        age = age / 60;
        duration = age.toFixed(0) + ' min';
      } else {
        duration = age.toFixed(0) + ' sec';
      }
      document.getElementById('refreshDuration').innerHTML = 'Last update: ' + duration + ' ago';
    }, 15000);
  }

  private setNamespaceFilter(event) {
    this.namespaceFilter = event.target.value;
    console.log(this.namespaceFilter);
  }

  private setPodStatusFilter(event) {
    this.podStatusFilter = event.target.value;
    console.log(this.podStatusFilter);
  }

  private setNodeFilter(event) {
    this.nodeFilter = event.target.value;
  }

  private podInfo(pod: PodService) {
    return SnapshotService.getPodToString(pod);
  }

  private updatePodData(podOld: PodService, podNew: PodService) {
    podOld.namespace = podNew.namespace;
    podOld.podName = podNew.podName;
    podOld.ready = podNew.ready;
    podOld.status = podNew.status;
    podOld.restarts = podNew.restarts;
    podOld.age = podNew.age;
    podOld.ip = podNew.ip;
    podOld.node = podNew.node;
    podOld.podMemory = podNew.podMemory;
    podOld.colour = podNew.colour;
    podOld.logs = podNew.logs;
    podOld.icon = podNew.icon;
    podOld.podCommand = podNew.podCommand;
    podOld.deleted = podNew.deleted;
    podOld.podId = podNew.podId;
    return podOld;
  }
}
