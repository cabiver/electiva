import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendaPagesComponent } from './pages/agenda-pages/agenda-pages.component';

const routes: Routes = [
  {
    path:'',
    component:AgendaPagesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgendaRoutingModule { }
