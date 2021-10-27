import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiciosRoutingModule } from './servicios-routing.module';
import { ServiciosPagesComponent } from './pages/servicios-pages/servicios-pages.component';


@NgModule({
  declarations: [
    ServiciosPagesComponent
  ],
  imports: [
    CommonModule,
    ServiciosRoutingModule
  ]
})
export class ServiciosModule { }
