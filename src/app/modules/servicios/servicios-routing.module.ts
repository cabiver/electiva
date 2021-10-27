import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiciosPagesComponent } from './pages/servicios-pages/servicios-pages.component';

const routes: Routes = [
  {
    path: "",
    component: ServiciosPagesComponent
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiciosRoutingModule { }
