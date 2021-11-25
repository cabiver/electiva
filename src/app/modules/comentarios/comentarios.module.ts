import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComentariosRoutingModule } from './comentarios-routing.module';
import { ComentarioPageComponent } from './pages/comentario-page/comentario-page.component';
import { SharedModule } from '@shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ComentarioPageComponent
  ],
  imports: [
    CommonModule,
    ComentariosRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ComentariosModule { }
