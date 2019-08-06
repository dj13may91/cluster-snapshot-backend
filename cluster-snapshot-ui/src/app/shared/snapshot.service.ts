import {Injectable} from '@angular/core';
import {ClusterCommand} from "../cluster-commands/cluster-command";
import {PodService} from "../pod-data-container/pod.service";
import {ClusterServices} from "../cluster-services/ClusterServices";
import {NotificationModel} from "./NotificationModel";

@Injectable({
  providedIn: 'root'
})
export class SnapshotService {

  public clusterCommandList: ClusterCommand[];
  public podList: PodService[];
  public clusterServiceList: ClusterServices[];
  public readNotifications: NotificationModel[] = [];
  public newNotifications: NotificationModel[] = [];

  constructor() {
  }

  public addNewNotification(notification: NotificationModel){
    this.newNotifications.unshift(notification);
  }

  public getNotificationCount(){
    return this.newNotifications.length + this.readNotifications.length;
  }
}
