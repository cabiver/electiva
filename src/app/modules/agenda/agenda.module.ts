import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgendaRoutingModule } from './agenda-routing.module';
import { AgendaPagesComponent } from './pages/agenda-pages/agenda-pages.component';


@NgModule({
  declarations: [
    AgendaPagesComponent
  ],
  imports: [
    CommonModule,
    AgendaRoutingModule
  ]
})
export class AgendaModule { }
