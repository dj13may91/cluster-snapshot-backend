import {Component, OnInit} from '@angular/core';
import {BackendClientComponent} from '../backend-client/backend-client.component';
import {SnapshotService} from '../shared/snapshot.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public contextList = [];

  constructor(public backend: BackendClientComponent, public snapshot: SnapshotService) {

    this.backend.getCurrentContext().subscribe(
      (response: string) => {
        this.snapshot.context = response;
        console.log('current context', response);
      },
      (error) => console.log(error)
    );

    this.backend.getContextSet().subscribe(
      (response: string[]) => {
        this.contextList = response;
        console.log(response);
      },
      (error) => console.log('error getting context list', error)
    );
  }

  ngOnInit() {
  }

  setContext(ctx: string) {
    this.backend.setContext(ctx).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
    this.snapshot.context = ctx;
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
