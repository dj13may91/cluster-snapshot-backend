//https://stomp-js.github.io/api-docs/latest/classes/StompConfig.html

import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import * as StompJS from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import {BackendClientComponent} from "../backend-client/backend-client.component";
import {SnapshotService} from "../shared/snapshot.service";
import {NotificationModel} from "../shared/NotificationModel";
import {HttpErrorResponse} from "@angular/common/http";
import {PodService} from "../pod-data-container/pod.service";

@Component({
  selector: 'app-server-component',
  templateUrl: './server-component.component.html',
  styleUrls: ['./server-component.component.scss']
})
export class ServerComponentComponent implements OnInit, OnDestroy {

  title = 'Web Socket';
  greetings: string[] = [];
  disabled = true;
  name: string;
  @Input() pod: PodService;

  description = 'Angular-WebSocket Demo';
  private stompClient = null;

  constructor(private backend: BackendClientComponent, private snapshot: SnapshotService) {
    // this.pod = this.pod === undefined ? this.getPod() : this.pod;
  }

  ngOnInit(): void {
    this.description = this.pod.namespace + '.' + this.pod.podName;
    this.connect();
  }

  setConnected(connected: boolean) {
    this.disabled = !connected;

    if (connected) {
      this.greetings = [];
    }
  }

  connect() {
    this.snapshot.addNewNotification(new NotificationModel(NotificationModel.SUCCESS,
      'Live logs for' + this.pod.podName + ', Connection established!!'))

    const socket = new SockJS('http://localhost:8082/gkz-stomp-endpoint');
    //earlier Stomp.over method is now client ?
    this.stompClient = StompJS.Stomp.over(socket);
    this.stompClient.reconnect_delay = 5000;
    const _this = this;
    this.stompClient.connect({}, (frame) => {
      _this.setConnected(true);
      console.log('Connected: ' + frame);
      _this.stompClient.subscribe('/topic/' + this.pod.namespace + '/' + this.pod.podName,
        (log) => {
          _this.showLogLine(log.body);
        });
    });

    // this.verifyConnection();

    this.backend.startLogs(this.pod.podName).subscribe(
      (response) => {
        console.log('response', response);
        this.snapshot.addNewNotification(new NotificationModel(NotificationModel.SUCCESS,
          'Live logs for' + this.pod.podName + ', Connection established!!'))
      },
      (error: HttpErrorResponse) => {
        if (error.statusText !== 'OK') {
          this.snapshot.addNewNotification(new NotificationModel(NotificationModel.ERROR, "Error establishing connection"))
          console.log('error', error);
        } else {
          this.snapshot.addNewNotification(new NotificationModel(NotificationModel.SUCCESS,
            'Live logs for' + this.pod.podName + ', Connection established!!'))
        }
      }
    );
  }

  disconnect() {
    if (this.stompClient != null) {
      this.stompClient.disconnect();
    }
    this.setConnected(false);
    console.log('Disconnected!');
    this.closeConnection();
  }

  //this is used to send message to backend
  verifyConnection() {
    this.stompClient.publish({
      destination: '/hello',
      body: JSON.stringify({'connection established': this.name}),
      skipContentLengthHeader: true
    });
  }

  onLogChangeScrollToBottom(){
    window.setInterval(function() {
      const elem = document.getElementById('logModal');
      elem.scrollTop = elem.scrollHeight;
    }, 1000);
  }

  showLogLine(message) {
    this.greetings.push(message);
    this.onLogChangeScrollToBottom();
  }

  ngOnDestroy(): void {
    this.closeConnection();
    console.log('web socket destroyed');
  }

  private closeConnection() {
    this.backend.stopLogs(this.pod.podName).subscribe(
      (response) => {
        this.snapshot.addNewNotification(new NotificationModel(NotificationModel.SUCCESS, "Web socket connection ended"))
        console.log('Closing connection: ', response);
      },
      (error) => {
        if (error.statusText !== 'OK') {
          console.log('error', error);
        }
        this.snapshot.addNewNotification(new NotificationModel(NotificationModel.SUCCESS, "Connection closed!!"));
      });
  }

  // getPod() {
  //   var pod = new PodService();
  //   pod.podName = 'DummyPod123';
  //   pod.namespace = 'kNameSpace';
  //   return pod;
  // }
}
