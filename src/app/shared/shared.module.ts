import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './componets/header/header.component';
import { FooterComponent } from './componets/footer/footer.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
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
