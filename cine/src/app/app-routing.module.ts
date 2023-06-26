import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ActoresListComponent } from './actores/actores-list.component';
import { ActoresComponent } from './actores/actores.component';
import { GrupoComponent } from './grupo/grupo.component';
import { PeliculaDetalleComponent } from './peliculas/pelicula-detalle/pelicula-detalle.component';
import { PeliculaFormComponent } from './peliculas/pelicula-form/pelicula-form.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { SalasComponent } from './salas/salas.component';
import { ClienteComponent } from './clientes/clientes.component';
import { CineComponent } from './cine/cine.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'pelicula', component: PeliculasComponent },
  { path: 'peliculas/:id', component: PeliculaDetalleComponent },
  { path: 'peliculas/agregar', component: PeliculaFormComponent },
  { path: 'peliculas/editar/:id', component: PeliculaFormComponent },
  { path: 'actores', component: ActoresComponent },
  { path: 'grupo', component: GrupoComponent },
  { path: 'sala', component: SalasComponent },
  { path: 'actores/lista-actores', component: ActoresListComponent },
  // Ruta por defecto (puede variar según tu implementación)
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'clientes', component: ClienteComponent },
  { path: 'cine', component: CineComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
