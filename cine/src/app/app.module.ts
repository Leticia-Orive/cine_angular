import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { GrupoComponent } from './grupo/grupo.component';

import { PeliculaDetalleComponent } from './peliculas/pelicula-detalle/pelicula-detalle.component';
import { PeliculaFormComponent } from './peliculas/pelicula-form/pelicula-form.component';
import { PeliculaListComponent } from './peliculas/pelicula-list/pelicula-list.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { SalaCinesComponent } from './salas/salas.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PeliculaService } from './peliculas/peliculas.service';

import { ClienteComponent } from './clientes/clientes.component';
import { ClienteService } from './clientes/clientes.service';
import { CineComponent } from './cine/cine.component';
import { CineService } from './cine/cine.service';
import { ActoresComponent } from './actores/actores.component';
import { ActoresService } from './actores/actores.service';

@NgModule({
  declarations: [
    AppComponent,
    ActoresComponent,
    GrupoComponent,

    PeliculasComponent,
    PeliculaDetalleComponent,
    PeliculaFormComponent,
    PeliculaListComponent,
    SalaCinesComponent,
    CineComponent,

    ClienteComponent,
    ActoresComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,

    RouterModule,
  ],
  providers: [PeliculaService, ClienteService, CineService, ActoresService],
  bootstrap: [AppComponent],
})
export class AppModule {}
