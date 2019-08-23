import {HttpClient} from '@angular/common/http';
import {Component} from '@angular/core';

@Component({
  selector: 'app-backend-client',
  templateUrl: './backend-client.component.html'
})
export class PodBackendClientComponent {

  public url = 'http://localhost:8082/';
  public pods = this.url + 'pods/';
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


  refreshPodDetails() {
    return this.http.get(this.refreshPod);
  }

  refreshPodLogs(podName: string) {
    return this.http.get(this.refreshPod + podName, {
      responseType: 'text'
    });
  }

  getNamespaceList() {
    return this.http.get(this.namespaceList, {
      responseType: 'json'
    });
  }
}
