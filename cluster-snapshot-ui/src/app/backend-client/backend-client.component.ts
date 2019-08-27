import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import 'rxjs-compat/add/operator/map';
import 'rxjs-compat/add/operator/catch';

@Component({
  selector: 'app-backend-client',
  templateUrl: './backend-client.component.html'
})
export class BackendClientComponent implements OnInit {

  public url = 'http://localhost:8082/';
  public openSocket = this.url + 'sendLogs/';
  public pauseSocket = this.url + 'pauseLogs/';
  public closeSocket = this.url + 'stopLogs/';
  public clusterCommands = this.url + 'commands/';
  public clusterContextList = this.url + 'context/list/';
  public contextSet = this.url + 'context/';
  public contextCurrent = this.url + 'context/current';
  public commandOutput = this.clusterCommands + 'output/';
  public refreshCommandOutput = this.clusterCommands + 'refresh/';

  constructor(public http: HttpClient) {
    console.log(this.http.get('http://localhost:8080/health'));
  }

  ngOnInit() {
  }

  getCurrentContext() {
    return this.http.get(this.contextCurrent, {
      responseType: 'text'
    });
  }

  getContextSet() {
    return this.http.get(this.clusterContextList);
  }

  setContext(currentContext: string) {
    return this.http.post(this.contextSet + currentContext, {
      responseType: 'text'
    });
  }

  getClusterCommands() {
    return this.http.get(this.clusterCommands);
  }

  getCommandOutput(command: string) {
    const httpParams = new HttpParams().append('command', command);
    return this.http.post(this.commandOutput, httpParams, {
      responseType: 'text'
    });
  }

  refreshClusterCommandLogs(command: string) {
    const httpParams = new HttpParams().append('command', command);
    return this.http.post(this.refreshCommandOutput, httpParams, {
      responseType: 'text'
    });
  }

  startLogs(podName: string, sessionId: string) {
    const httpParams = new HttpParams().append('sessionId', sessionId);
    return this.http.post(this.openSocket + podName, httpParams, {
      responseType: 'text'
    });
  }

  pauseLogs(podName: string, sessionId: string) {
    const httpParams = new HttpParams().append('sessionId', sessionId);
    return this.http.post(this.pauseSocket + podName, httpParams, {
      responseType: 'text'
    });
  }

  stopLogs(podName: string, sessionId: string) {
    const httpParams = new HttpParams().append('sessionId', sessionId);
    return this.http.post(this.closeSocket + podName, httpParams, {
      responseType: 'text'
    });
  }
}
