import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioPagesComponent } from './pages/inicio-pages/inicio-pages.component';
import { SharedModule } from '@shared/shared.module';
import { FormularioComponent } from './pages/formulario/formulario.component';


@NgModule({
  declarations: [
    InicioPagesComponent,
    FormularioComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    SharedModule
  ]
})
export class InicioModule { }
