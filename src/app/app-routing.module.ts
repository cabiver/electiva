import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
