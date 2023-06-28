import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GrupoComponent } from './grupo/grupo.component';
import { PeliculaDetalleComponent } from './peliculas/pelicula-detalle/pelicula-detalle.component';
import { PeliculaFormComponent } from './peliculas/pelicula-form/pelicula-form.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { SalaCinesComponent } from './salas/salas.component';
import { ClienteComponent } from './clientes/clientes.component';
import { CineComponent } from './cine/cine.component';
import { ActoresComponent } from './actores/actores.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  { path: 'pelicula', component: PeliculasComponent },
  { path: 'peliculas/:id', component: PeliculaDetalleComponent },
  { path: 'peliculas/agregar', component: PeliculaFormComponent },
  { path: 'peliculas/editar/:id', component: PeliculaFormComponent },
  { path: 'actores', component: ActoresComponent },
  { path: 'grupo', component: GrupoComponent },
  { path: 'sala', component: SalaCinesComponent },

  // Ruta por defecto (puede variar según tu implementación)
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'clientes', component: ClienteComponent },
  { path: 'cine', component: CineComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
