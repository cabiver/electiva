import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Persona5PageComponent } from './pages/persona5-page/persona5-page.component';

const routes: Routes = [
  {
    path:'',
    component:Persona5PageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Persona5RoutingModule { }
