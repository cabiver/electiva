import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioPagesComponent } from './pages/inicio-pages/inicio-pages.component';


@NgModule({
  declarations: [
    InicioPagesComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule
  ]
})
export class InicioModule { }
