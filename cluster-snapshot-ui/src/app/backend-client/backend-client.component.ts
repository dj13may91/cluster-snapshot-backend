import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import "rxjs-compat/add/operator/map";
import "rxjs-compat/add/operator/catch";

@Component({
  selector: 'app-backend-client',
  templateUrl: './backend-client.component.html'
})
export class BackendClientComponent implements OnInit {

  public url = 'http://localhost:8082/';
  public openSocket = this.url + 'sendLogs/';
  public closeSocket = this.url +  'stopLogs/';
  public clusterCommands = this.url + 'commands/';
  public commandOutput = this.clusterCommands + 'output/';
  public refreshCommandOutput = this.clusterCommands + 'refresh/';

  constructor(public http: HttpClient) {
    console.log(this.http.get("http://localhost:8080/health"));
  }

  ngOnInit() {
  }

  getClusterCommands() {
    return this.http.get(this.clusterCommands);
  }

  getCommandOutput(command: string) {
    let httpParams = new HttpParams().append('command', command);
    return this.http.post(this.commandOutput, httpParams, {
      responseType: 'text'
    });
  };

  refreshClusterCommandLogs(command: string) {
    let httpParams = new HttpParams().append('command', command);
    return this.http.post(this.refreshCommandOutput, httpParams, {
      responseType: 'text'
    });
  };

  startLogs(podName: string) {
    return this.http.get(this.openSocket + podName);
  }

  stopLogs(podName: string) {
    return this.http.get(this.closeSocket + podName);
  }
}
