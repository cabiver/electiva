import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SonrisasRoutingModule } from './sonrisas-routing.module';
import { SonrisasPageComponent } from './pages/sonrisas-page/sonrisas-page.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    SonrisasPageComponent
  ],
  imports: [
    CommonModule,
    SonrisasRoutingModule,
    SharedModule
  ]
})
export class SonrisasModule { }
