import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {BackendClientComponent} from './backend-client/backend-client.component';
import {HttpClientModule} from "@angular/common/http";
import {PodDataContainerComponent} from './pod-data-container/pod-data-container.component';
import {ClusterCommandsComponent} from './cluster-commands/cluster-commands.component';
import {PodSearchPipePipe} from './pod-data-container/PodSearchPipe.pipe';
import {FormsModule} from "@angular/forms";
import {ClusterSearchPipe} from './cluster-commands/cluster-search.pipe';
import {PodBackendClientComponent} from "./backend-client/pod-backend-client.component";
import {ClusterServicesComponent} from './cluster-services/cluster-services.component';
import {ClusterServicesPipe} from './cluster-services/cluster-services.pipe';
import {ClusterServiceBackendClient} from "./backend-client/cluster-service-backend-client";
import { ServerComponentComponent } from './server-component/server-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BackendClientComponent,
    ClusterCommandsComponent,
    PodBackendClientComponent,
    PodDataContainerComponent,
    PodSearchPipePipe,
    ClusterServiceBackendClient,
    ClusterSearchPipe,
    ClusterServicesComponent,
    ClusterServicesPipe,
    ServerComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [BackendClientComponent, PodBackendClientComponent, ClusterServiceBackendClient],
  bootstrap: [AppComponent]
})
export class AppModule {
}
