import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './componets/header/header.component';
import { FooterComponent } from './componets/footer/footer.component';
import { RouterModule } from '@angular/router';
import { ComentarioNormalComponent } from './componets/cometarios/comentario-normal/comentario-normal.component';
import { ComentarioJokerComponent } from './componets/cometarios/comentario-joker/comentario-joker.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ComentarioNormalComponent,
    ComentarioJokerComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent
  ]

})
export class SharedModule { }
