import {Component, OnInit} from '@angular/core';
import {BackendClientComponent} from "../backend-client/backend-client.component";
import {SnapshotService} from "../shared/snapshot.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  constructor(public backend: BackendClientComponent, public snapshot: SnapshotService) {
  }

  ngOnInit() {
  }

  markAllAsRead() {
    this.snapshot.readNotifications.push(...this.snapshot.newNotifications);
    this.snapshot.newNotifications = [];
  }

  deleteAll() {
    this.snapshot.newNotifications = [];
    this.snapshot.readNotifications = [];
  }
}
