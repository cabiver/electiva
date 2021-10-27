import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404PagesComponent } from './pages/error404-pages/error404-pages.component';
import { SonrisasPageComponent } from './pages/sonrisas-page/sonrisas-page.component';

const routes: Routes = [
  {
    path:"",
    component:SonrisasPageComponent,
    loadChildren: () => import('@inicio/inicio.module')
    .then(m => m.InicioModule)
  },
  {
    path:"sedes",
    component:SonrisasPageComponent,
    loadChildren: () => import('@sedes/sedes.module')
    .then(m => m.SedesModule)
  },
  {
    path:"servicios",
    component:SonrisasPageComponent,
    loadChildren: () => import('@servicios/servicios.module')
    .then(m => m.ServiciosModule)
  },
  {
    path:"comentarios",
    component:SonrisasPageComponent,
    loadChildren: () => import('@comentarios/comentarios.module')
    .then(m => m.ComentariosModule)
  },
  {
    path:"agenda",
    component:SonrisasPageComponent,
    loadChildren: () => import('@agenda/agenda.module')
    .then(m => m.AgendaModule)
  },
  {
    path:'**',
    component: Error404PagesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SonrisasRoutingModule { }
