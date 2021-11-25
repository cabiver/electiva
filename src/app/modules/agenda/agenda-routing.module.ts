import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendaPagesComponent } from './pages/agenda-pages/agenda-pages.component';
import { ClientsComponent } from './pages/clients/clients.component';

const routes: Routes = [
  {
    path:'',
    component:AgendaPagesComponent
  },
  {
    path:'client',
    component:ClientsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgendaRoutingModule { }
