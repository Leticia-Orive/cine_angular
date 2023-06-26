import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActoresComponent } from './actores/actores.component';
import { CineComponent } from './cine/cine.component';
import { CineCreateComponent } from './cine/vistas/cine-create.component';
import { CineDetailComponent } from './cine/vistas/cine-detail.component';
import { CineListComponent } from './cine/vistas/cine-list.component';

import { GrupoComponent } from './grupo/grupo.component';
import { LoginComponent } from './login/login.component';
import { PeliculaDetalleComponent } from './peliculas/pelicula-detalle/pelicula-detalle.component';
import { PeliculaFormComponent } from './peliculas/pelicula-form/pelicula-form.component';
import { PeliculaListComponent } from './peliculas/pelicula-list/pelicula-list.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { SalasComponent } from './salas/salas.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ActoresModule } from './actores/actores.module';
import { CineModule } from './cine/cine.module';
import { ActoresService } from './actores/actores.service';
import { CineService } from './cine/cine.service';

import { PeliculaService } from './peliculas/peliculas.service';
import { RegisterComponent } from './login/register.component';
import { ClienteComponent } from './clientes/clientes.component';
import { ClienteService } from './clientes/clientes.service';

@NgModule({
  declarations: [
    AppComponent,
    ActoresComponent,
    GrupoComponent,
    LoginComponent,
    PeliculasComponent,
    PeliculaDetalleComponent,
    PeliculaFormComponent,
    PeliculaListComponent,
    SalasComponent,
    CineComponent,
    CineCreateComponent,
    CineDetailComponent,
    CineListComponent,
    RegisterComponent,
    ClienteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CineModule,
    ActoresModule,
    RouterModule,
  ],
  providers: [PeliculaService, CineService, ActoresService, ClienteService],
  bootstrap: [AppComponent],
})
export class AppModule {}
