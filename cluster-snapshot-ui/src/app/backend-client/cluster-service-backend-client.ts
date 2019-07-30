import {HttpClient} from "@angular/common/http";
import {Component} from "@angular/core";

@Component({
  selector: 'app-backend-client',
  templateUrl: './backend-client.component.html'
})
export class ClusterServiceBackendClient {
  public url = 'http://localhost:8082/';
  public services = this.url + "services/"

  constructor(public http: HttpClient) {
  }

  getServices(){
    return this.http.get(this.services);
  }
}
