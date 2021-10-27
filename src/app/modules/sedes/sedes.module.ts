import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SedesRoutingModule } from './sedes-routing.module';
import { SedesPagesComponent } from './pages/sedes-pages/sedes-pages.component';


@NgModule({
  declarations: [
    SedesPagesComponent
  ],
  imports: [
    CommonModule,
    SedesRoutingModule
  ]
})
export class SedesModule { }
