import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaComentariosComponent } from './components/pagina-comentarios/pagina-comentarios.component';
import { PaginaNosotrosComponent } from './components/pagina-nosotros/pagina-nosotros.component';
import { PaginaPlanesComponent } from './components/pagina-planes/pagina-planes.component';
import { PaginaPrincipalComponent } from './components/pagina-principal/pagina-principal.component';
import { PaginaReservasComponent } from './components/pagina-reservas/pagina-reservas.component';
import { PaginaSedesComponent } from './components/pagina-sedes/pagina-sedes.component';

const routes: Routes = [
  {
    path:"",
    component: PaginaPrincipalComponent 
  },
  {
    path:"nosotros",
    component: PaginaNosotrosComponent 
  },
  {
    path:"sedes",
    component: PaginaSedesComponent 
  },
  {
    path:"comentarios",
    component: PaginaComentariosComponent 
  },
  {
    path:"reservas",
    component: PaginaReservasComponent
  },
  {
    path:"planes",
    component: PaginaPlanesComponent
  },
  // {
  //   path:"page404",
  //   component: PaginaPlanesComponent
  // }
  // {
  //   path:",redirectTo'page404',pathMatch:'full'"
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
