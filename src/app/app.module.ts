import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { PaginaPrincipalComponent } from './components/pagina-principal/pagina-principal.component';
import { PaginaNosotrosComponent } from './components/pagina-nosotros/pagina-nosotros.component';
import { PaginaSedesComponent } from './components/pagina-sedes/pagina-sedes.component';
import { PaginaComentariosComponent } from './components/pagina-comentarios/pagina-comentarios.component';
import { PaginaReservasComponent } from './components/pagina-reservas/pagina-reservas.component';
import { PaginaPlanesComponent } from './components/pagina-planes/pagina-planes.component';
import { ComentarioNormalComponent } from './components/Comentarios/comentario-normal/comentario-normal.component';
import { VentanaEmergenteComponent } from './components/ventana-emergente/ventana-emergente.component';
import { CarrucelPrincipalComponent } from './components/Carrucel/carrucel-principal/carrucel-principal.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    PaginaPrincipalComponent,
    PaginaNosotrosComponent,
    PaginaSedesComponent,
    PaginaComentariosComponent,
    PaginaReservasComponent,
    PaginaPlanesComponent,
    ComentarioNormalComponent,
    VentanaEmergenteComponent,
    CarrucelPrincipalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
