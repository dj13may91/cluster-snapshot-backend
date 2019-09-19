import {HttpClient} from '@angular/common/http';
import {Component} from '@angular/core';
import {ClusterServices} from '../cluster-services/ClusterServices';

@Component({
  selector: 'app-backend-client',
  templateUrl: './backend-client.component.html'
})
// tslint:disable-next-line:component-class-suffix
export class ClusterServiceBackendClient {
  public url = 'http://localhost:8082/';
  public services = this.url + 'services/';
  public refresh = this.services + 'refresh/';

  constructor(public http: HttpClient) {
  }

  getServices() {
    return this.http.get(this.services);
  }

  refreshServices() {
    return this.http.get(this.refresh);
  }
}
