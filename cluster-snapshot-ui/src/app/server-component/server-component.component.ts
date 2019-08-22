// https://stomp-js.github.io/api-docs/latest/classes/StompConfig.html
// https://stackoverflow.com/questions/38978475/spring-websocket-to-stream-results-of-a-command-back-to-browser

import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import * as StompJS from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import {BackendClientComponent} from '../backend-client/backend-client.component';
import {SnapshotService} from '../shared/snapshot.service';
import {NotificationModel} from '../shared/NotificationModel';
import {HttpErrorResponse} from '@angular/common/http';
import {PodService} from '../pod-data-container/pod.service';
import {RandomIdGenerator} from '../shared/random-id-generator';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-server-component',
  templateUrl: './server-component.component.html',
  styleUrls: ['./server-component.component.scss']
})
export class ServerComponentComponent implements OnInit, OnDestroy {
  public logs: string[] = [];
  public disabled = true;
  public name: string;
  public autoScroll;
  public searchText: string;
  public startSubscription: Subscription;
  public sessionId = RandomIdGenerator.makeid(6) + '-' + RandomIdGenerator.makeid(4) + '-' + RandomIdGenerator.makeid(6);
  @Input() pod: PodService;

  description;
  private stompClient = null;

  constructor(private backend: BackendClientComponent, private snapshot: SnapshotService) {
  }

  ngOnInit(): void {
    this.description = this.pod.namespace + '.' + this.pod.podName;
    this.connect();
  }

  setConnected(connected: boolean) {
    this.disabled = !connected;
  }

  connect() {
    this.searchText = null;
    this.snapshot.addNewNotification(new NotificationModel(NotificationModel.SUCCESS,
      'Live logs for' + this.pod.podName + ', Connection established!!'));

    const socket = new SockJS('http://localhost:8082/gkz-stomp-endpoint');
    // earlier Stomp.over method is now client ?
    this.stompClient = StompJS.Stomp.over(socket);
    this.stompClient.reconnect_delay = 5000;
    const _this = this;
    this.stompClient.connect({}, (frame) => {
      _this.setConnected(true);
      console.log('Connected: ' + frame);
      this.startSubscription = _this.stompClient.subscribe('/topic/' + this.sessionId,
        (log) => _this.showLogLine(log.body));
    });

    // this.verifyConnection();
    this.backend.startLogs(this.pod.podName, this.sessionId).subscribe(
      (response) => {
        console.log('response', response);
        this.snapshot.addNewNotification(new NotificationModel(NotificationModel.SUCCESS,
          'Live logs for' + this.pod.podName + ', Connection established!!'))
      },
      (error: HttpErrorResponse) => {
        if (error.statusText !== 'OK') {
          this.snapshot.addNewNotification(new NotificationModel(NotificationModel.ERROR, 'Error establishing connection'))
          console.log('error', error);
        } else {
          this.snapshot.addNewNotification(new NotificationModel(NotificationModel.SUCCESS,
            'Live logs for' + this.pod.podName + ', Connection established!!'))
        }
      }
    );
  }

  // this is used to send message to backend
  verifyConnection() {
    this.stompClient.publish({
      destination: '/hello',
      body: JSON.stringify({'connection established': this.name}),
      skipContentLengthHeader: true
    });
  }

  onLogChangeScrollToBottom(duration = 3000) {
    window.clearInterval(this.autoScroll);
    this.autoScroll = window.setInterval( () => {
      const elem = document.getElementById('logModal');
      elem.scrollTop = elem.scrollHeight;
    }, duration);
  }

  showLogLine(message) {
    this.logs.push(...message.split('\n'));
    this.onLogChangeScrollToBottom();
  }

  closeConnection() {
    this.backend.stopLogs(this.pod.podName, this.sessionId).subscribe(
      (response) => {
        this.snapshot.addNewNotification(new NotificationModel(NotificationModel.SUCCESS, 'Web socket connection ended'));
        console.log('Closing connection for session: ' + this.sessionId, response);
      },
      (error) => {
        // if (error.statusText !== 'OK') {
        console.log('error', error);
        // }
        this.snapshot.addNewNotification(new NotificationModel(NotificationModel.SUCCESS, 'Connection closed for session: ' + this.sessionId));
      });
  }


  pauseConnection() {
    this.backend.pauseLogs(this.pod.podName, this.sessionId).subscribe((response) => {
        this.snapshot.addNewNotification(new NotificationModel(NotificationModel.SUCCESS, 'Web socket connection paused'))
        console.log('Pausing connection for session: ' + this.sessionId, response);
      },
      (error) => {
        // if (error.statusText !== 'OK') {
        console.log('error', error);
        // }
        this.snapshot.addNewNotification(new NotificationModel(NotificationModel.SUCCESS, 'Connection paused for session: ' + this.sessionId));
      });
    this.pauseSetup();
  }

  pauseSetup() {
    this.startSubscription.unsubscribe();
    this.setConnected(false);
    this.onLogChangeScrollToBottom(1000000);
    window.clearInterval(this.autoScroll);
  }

  disconnect() {
    if (this.stompClient != null) {
      this.stompClient.disconnect();
    }
    this.pauseSetup();
    console.log('Disconnected  for session: ' + this.sessionId);
  }

  ngOnDestroy(): void {
    this.disconnect();
    this.closeConnection();
    // this.autoScroll = null;
    console.log('web socket destroyed for session: ' + this.sessionId);
  }
}

