import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ConfigurationsRoutingModule} from "./configurations-routing.module";
import { CityPageComponent } from './containers/city-page/city-page.component';



@NgModule({
  declarations: [CityPageComponent],
  imports: [
    CommonModule,
    ConfigurationsRoutingModule
  ]
})
export class ConfigurationsModule { }
