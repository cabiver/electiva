import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './componets/header/header.component';
import { FooterComponent } from './componets/footer/footer.component';
import { RouterModule } from '@angular/router';
import { ComentarioNormalComponent } from './componets/cometarios/comentario-normal/comentario-normal.component';
import { ComentarioJokerComponent } from './componets/cometarios/comentario-joker/comentario-joker.component';
import { CardNormalComponent } from './componets/cards/card-normal/card-normal.component';
import { CardServiciosComponent } from './componets/cards/card-servicios/card-servicios.component';
import { HeaderBackgroundComponent } from './componets/header-background/header-background.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ComentarioNormalComponent,
    ComentarioJokerComponent,
    CardNormalComponent,
    CardServiciosComponent,
    HeaderBackgroundComponent,
  ],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    ComentarioJokerComponent,
    ComentarioNormalComponent,
    CardNormalComponent,
    CardServiciosComponent
  ]

})
export class SharedModule { }
