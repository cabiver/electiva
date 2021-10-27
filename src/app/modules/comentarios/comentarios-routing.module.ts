import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComentarioPageComponent } from './pages/comentario-page/comentario-page.component';

const routes: Routes = [
  {
    path:'',
    component:ComentarioPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComentariosRoutingModule { }
