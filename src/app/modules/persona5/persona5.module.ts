import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Persona5RoutingModule } from './persona5-routing.module';
import { Persona5PageComponent } from './pages/persona5-page/persona5-page.component';
import { HeaderPersonaComponent } from './pages/header-persona/header-persona.component';


@NgModule({
  declarations: [
    Persona5PageComponent,
    HeaderPersonaComponent
  ],
  imports: [
    CommonModule,
    Persona5RoutingModule
  ]
})
export class Persona5Module { }
