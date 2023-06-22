import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ActoresListComponent } from './actores/actores-list.component';
import { ActoresComponent } from './actores/actores.component';
import { CineComponent } from './cine/cine.component';
import { CineCreateComponent } from './cine/vistas/cine-create.component';
import { CineDetailComponent } from './cine/vistas/cine-detail.component';
import { CineEditComponent } from './cine/vistas/cine-edit.component';
import { CineListComponent } from './cine/vistas/cine-list.component';
import { ClienteComponent } from './cliente/cliente.component';
import { GrupoComponent } from './grupo/grupo.component';
import { PeliculaDetalleComponent } from './peliculas/pelicula-detalle/pelicula-detalle.component';
import { PeliculaFormComponent } from './peliculas/pelicula-form/pelicula-form.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { SalasComponent } from './salas/salas.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'clientes', component: ClienteComponent },
  { path: 'cine', component: CineComponent },
  { path: 'pelicula', component: PeliculasComponent },
  { path: 'peliculas/:id', component: PeliculaDetalleComponent },
  { path: 'peliculas/agregar', component: PeliculaFormComponent },
  { path: 'peliculas/editar/:id', component: PeliculaFormComponent },
  { path: 'actores', component: ActoresComponent },
  { path: 'grupo', component: GrupoComponent },
  { path: 'sala', component: SalasComponent },
  { path: 'editar', component: CineEditComponent },
  { path: 'list', component: CineListComponent },
  { path: 'detail', component: CineDetailComponent },
  { path: 'crear', component: CineCreateComponent },
  { path: 'actores/lista-actores', component: ActoresListComponent },
  // Ruta por defecto (puede variar según tu implementación)
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
