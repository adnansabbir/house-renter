import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {CityPageComponent} from "./containers/city-page/city-page.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'city',
  },
  {
    path: 'city',
    component: CityPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfigurationsRoutingModule {

}
