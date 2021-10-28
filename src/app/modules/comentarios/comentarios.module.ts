import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComentariosRoutingModule } from './comentarios-routing.module';
import { ComentarioPageComponent } from './pages/comentario-page/comentario-page.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    ComentarioPageComponent
  ],
  imports: [
    CommonModule,
    ComentariosRoutingModule,
    SharedModule
  ]
})
export class ComentariosModule { }
