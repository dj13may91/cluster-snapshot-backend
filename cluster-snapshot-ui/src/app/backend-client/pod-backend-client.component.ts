import {HttpClient} from '@angular/common/http';
import {Component} from '@angular/core';

export interface Info {
  id: string;
  name: string;
}

@Component({
  selector: 'app-backend-client',
  templateUrl: './backend-client.component.html'
})
export class PodBackendClientComponent {

  public url = 'http://localhost:8082/';
  public pods = this.url + 'pods/';
  public nodes = this.pods + 'nodes/';
  public namespaceList = this.pods + 'namespaces/';
  public refreshPod = this.pods + 'refresh/';

  constructor(public http: HttpClient) {
  }

  getPodMetadata() {
    return this.http.get(this.pods);
  }

  getPodLogs(podName: string) {
    return this.http.get(this.pods + podName, {
      responseType: 'text'
    });
  }

  getNodeMap() {
    return this.http.get<{ [key: string]: Info }>(this.nodes).map(response => {
      const map = new Map();
      Object.keys(response).forEach(key => {
        map.set(key, response[key]);
      });
      return map;
    });
  }

  refreshPodDetails() {
    return this.http.get(this.refreshPod);
  }

  refreshPodData(podName: string) {
    return this.http.get(this.refreshPod + podName, {
      responseType: 'json'
    });
  }

  getNamespaceList() {
    return this.http.get(this.namespaceList, {
      responseType: 'json'
    });
  }
}
