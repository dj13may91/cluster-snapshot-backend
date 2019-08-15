import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ClusterCommandsComponent} from "./cluster-commands/cluster-commands.component";
import {PodDataContainerComponent} from "./pod-data-container/pod-data-container.component";
import {ClusterServicesComponent} from "./cluster-services/cluster-services.component";
import {ServerComponentComponent} from "./server-component/server-component.component";
import {DashboardComponentComponent} from "./dashboard-component/dashboard-component.component";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: 'home', component: ClusterCommandsComponent, children: [
      // {path: 'new', component: RecipeEditComponent},
      // {path: ':id', component: RecipeDetailComponent},
      // {path: ':id/edit', component: RecipeEditComponent}
    ]
  },
  {path: 'pods', component: PodDataContainerComponent, children: []},
  {path: 'services', component: ClusterServicesComponent},
  {path: 'socket', component: ServerComponentComponent},
  {path: 'dashboards', component: DashboardComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
