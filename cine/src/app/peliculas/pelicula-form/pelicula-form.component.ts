import { Component, EventEmitter, Output } from '@angular/core';
import { Pelicula } from '../peliculas.model';

@Component({
  selector: 'app-pelicula-form',
  templateUrl: './pelicula-form.component.html',
  styleUrls: ['./pelicula-form.component.css'],
})
export class PeliculaFormComponent {
  @Output() guardarPelicula = new EventEmitter<Pelicula>();
  modo: string = 'form';
  pelicula: Pelicula = {
    id: 0,
    titulo: '',
    genero: '',
    director: '',
    duracion: 0,
    sinopsis: '',
    year: 0,
  };

  onSubmit(): void {
    // Validar los datos del formulario si es necesario

    // Emitir el evento con los datos de la película
    this.guardarPelicula.emit(this.pelicula);
  }

  saveMovie(): void {
    // Validar los datos del formulario si es necesario

    // Emitir el evento con los datos de la película
    this.guardarPelicula.emit(this.pelicula);
  }
}
