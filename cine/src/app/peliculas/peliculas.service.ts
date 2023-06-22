import { Injectable } from '@angular/core';
import { Pelicula } from './peliculas.model';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PeliculaService {
  private peliculas: Pelicula[] = [];

  constructor(private httpClient: HttpClient) {}

  getPeliculas(): Pelicula[] {
    return this.peliculas;
  }

  getPelicula(id: number): Pelicula | undefined {
    return this.peliculas.find((pelicula) => pelicula.id === id);
  }

  agregarPelicula(pelicula: Pelicula): void {
    this.peliculas.push(pelicula);
  }

  editarPelicula(pelicula: Pelicula): void {
    const index = this.peliculas.findIndex((p) => p.id === pelicula.id);
    if (index !== -1) {
      this.peliculas[index] = pelicula;
    }
  }

  eliminarPelicula(id: number): Observable<any> {
    //this.peliculas = this.peliculas.filter((pelicula) => pelicula.id !== id);
    // Buscar la película por su ID en el array de películas
    const indice = this.peliculas.findIndex((pelicula) => pelicula.id === id);

    if (indice !== -1) {
      // Eliminar la película del array
      this.peliculas.splice(indice, 1);
      return of(null); // Simulación de eliminación exitosa
    } else {
      return throwError('No se encontró la película'); // Simulación de error si no se encuentra la película
    }

    // Simulación de eliminación exitosa
    return of();
  }

  guardarPelicula(pelicula: Pelicula): Observable<any> {
    // Aquí se debe realizar la lógica para guardar la película en el servidor
    // Por ahora, simularemos una solicitud POST a una API ficticia
    return this.httpClient.post<Pelicula>(
      'http://localhost:4200/pelicula',
      pelicula
    );
  }
}
