import { Component } from '@angular/core';
import { Pelicula } from '../peliculas.model';

@Component({
  selector: 'app-pelicula-list',
  templateUrl: './pelicula-list.component.html',
  styleUrls: ['./pelicula-list.component.css'],
})
export class PeliculaListComponent {
  peliculas: Pelicula[] = [
    {
      id: 1,
      titulo: 'Pelicula 1',
      genero: 'Drama',
      director: '',
      duracion: 90,
      sinopsis: '',
      year: 1965,
    },
    {
      id: 2,
      titulo: 'Pelicula 2',
      genero: 'Acción',
      director: '',
      duracion: 120,
      sinopsis: '',
      year: 1965,
    },
    {
      id: 3,
      titulo: 'Pelicula 3',
      genero: 'Comedia',
      director: '',
      duracion: 90,
      sinopsis: '',
      year: 1965,
    },
    // Agrega más películas aquí
  ];

  // Implementa las acciones de lista, detalle y borrar según tus necesidades

  verDetalle(pelicula: Pelicula): void {
    // Implementa la lógica para mostrar el detalle de la película seleccionada
    console.log('Detalle de la película:', pelicula);
  }

  eliminarPelicula(pelicula: Pelicula): void {
    // Implementa la lógica para eliminar la película seleccionada
    console.log('Película eliminada:', pelicula);
  }
}
