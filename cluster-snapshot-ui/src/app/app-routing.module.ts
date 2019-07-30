import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ClusterCommandsComponent} from "./cluster-commands/cluster-commands.component";
import {PodDataContainerComponent} from "./pod-data-container/pod-data-container.component";
import {ClusterServicesComponent} from "./cluster-services/cluster-services.component";
import {ServerComponentComponent} from "./server-component/server-component.component";

const routes: Routes = [
  {path: '', redirectTo: 'all', pathMatch: 'full'},
  {
    path: 'all', component: ClusterCommandsComponent, children: [
      // {path: 'stock', component: RecipeStartComponent},
      // {path: 'new', component: RecipeEditComponent},
      // {path: ':id', component: RecipeDetailComponent},
      // {path: ':id/edit', component: RecipeEditComponent}
    ]
  },
  {path: 'pods', component: PodDataContainerComponent},
  {path: 'services', component: ClusterServicesComponent},
  {path: 'socket', component: ServerComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
