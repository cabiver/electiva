import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgendaRoutingModule } from './agenda-routing.module';
import { AgendaPagesComponent } from './pages/agenda-pages/agenda-pages.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientsComponent } from './pages/clients/clients.component';


@NgModule({
  declarations: [
    AgendaPagesComponent,
    ClientsComponent
  ],
  imports: [
    CommonModule,
    AgendaRoutingModule,
    ReactiveFormsModule
  ]
})
export class AgendaModule { }
