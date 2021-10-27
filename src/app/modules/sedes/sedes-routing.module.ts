import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SedesPagesComponent } from './pages/sedes-pages/sedes-pages.component';

const routes: Routes = [
  {
    path:'',
    component:SedesPagesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SedesRoutingModule { }
