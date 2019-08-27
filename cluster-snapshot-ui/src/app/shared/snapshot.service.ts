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
    ['Restarting', 26.8],
    ['Deleted', 12.8]];

  constructor() {
  }

  public addNewNotification(notification: NotificationModel) {
    this.newNotifications.unshift(notification);
  }

  public getNotificationCount() {
    return this.newNotifications.length + this.readNotifications.length;
  }
}
