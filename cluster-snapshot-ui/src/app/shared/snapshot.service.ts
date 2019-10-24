import {Injectable} from '@angular/core';
import {ClusterCommand} from '../cluster-commands/cluster-command';
import {PodService} from '../pod-data-container/pod.service';
import {ClusterServices} from '../cluster-services/ClusterServices';
import {NotificationModel} from './NotificationModel';

@Injectable({
  providedIn: 'root'
})
export class SnapshotService {

  public context = 'N/A';
  public clusterCommandList: ClusterCommand[];
  public podList: PodService[];
  public clusterServiceList: ClusterServices[];
  public readNotifications: NotificationModel[] = [];
  public newNotifications: NotificationModel[] = [];
  public podLastRefresh = new Date();
  public autoRefreshEnabled = true;
  public podStatusChart = [
    ['Demo_Running', 45.0],
    ['Not ready', 26.8],
    ['Deleted', 12.8]];

  constructor() {
  }

  public static getPodToString(pod: PodService) {
    return 'name= ' + pod.podName + '\n' +
      'namespace= ' + pod.namespace + '\n' +
      'ready= ' + pod.ready + '\n' +
      'status= ' + pod.status + '\n' +
      'restarts= ' + pod.restarts + '\n' +
      'age= ' + pod.age + '\n' +
      'ip= ' + pod.ip + '\n' +
      'node= ' + pod.node + '\n' +
      'podMemory= ' + (pod.podMemory ? pod.podMemory : 'Not found');
  }

  public static getServiceString(svc: ClusterServices) {
    return 'Namespace: ' + svc.namespace + '\n' +
      'Name: ' + svc.name + '\n' +
      'Type: ' + svc.type + '\n' +
      'ClusterIp: ' + svc.clusterIp + '\n' +
      'ExternalIp: ' + svc.externalIp + '\n' +
      'Ports: ' + svc.ports + '\n' +
      'Age: ' + svc.age;
  }

  public getServiceNameDisplayLabel(name: string) {
    let nameArr = name.split('-');
    nameArr = nameArr.map(s => s.charAt(0).toUpperCase() + s.slice(1));
    return nameArr.join(' ');
  }

  public addNewNotification(notification: NotificationModel) {
    this.newNotifications.unshift(notification);
  }

  public getNotificationCount() {
    return this.newNotifications.length + this.readNotifications.length;
  }
}
