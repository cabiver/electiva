import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SonrisasRoutingModule } from './sonrisas-routing.module';
import { SonrisasPageComponent } from './pages/sonrisas-page/sonrisas-page.component';
import { SharedModule } from '@shared/shared.module';
import { Error404PagesComponent } from './pages/error404-pages/error404-pages.component';

@NgModule({
  declarations: [
    SonrisasPageComponent,
    Error404PagesComponent
  ],
  imports: [
    CommonModule,
    SonrisasRoutingModule,
    SharedModule
  ]
})
export class SonrisasModule { }
