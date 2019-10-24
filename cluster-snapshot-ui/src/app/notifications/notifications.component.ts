import {Component, Input, OnInit} from '@angular/core';
import {SnapshotService} from '../shared/snapshot.service';
import {NotificationModel} from '../shared/NotificationModel';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  @Input() ntfcn: NotificationModel;
  @Input() isNew: boolean;
  @Input() index: number;
  public date = new Date();

  constructor(public snapshot: SnapshotService) {
  }

  ngOnInit() {
  }

  onCloseRead() {
    this.snapshot.readNotifications.splice(this.index, 1);
  }

  onCloseNew() {
    if (this.snapshot.readNotifications.length === 0) {
      this.snapshot.readNotifications.push(this.snapshot.newNotifications[this.index]);
    } else {
      this.snapshot.readNotifications.unshift(this.snapshot.newNotifications[this.index]);
    }
    this.snapshot.newNotifications.splice(this.index, 1);
  }
}
