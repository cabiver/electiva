import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComentariosRoutingModule } from './comentarios-routing.module';
import { ComentarioPageComponent } from './pages/comentario-page/comentario-page.component';


@NgModule({
  declarations: [
    ComentarioPageComponent
  ],
  imports: [
    CommonModule,
    ComentariosRoutingModule
  ]
})
export class ComentariosModule { }
