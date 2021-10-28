import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404PagesComponent } from './modules/sonrisas/pages/error404-pages/error404-pages.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/sonrisas/sonrisas.module')
    .then(m => m.SonrisasModule)
  },
  {
    path: 'persona',
    loadChildren: () => import('./modules/persona5/persona5.module')
    .then(m => m.Persona5Module)
  },
  {
    path:'**',
    component: Error404PagesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
