import { Injectable } from '@angular/core';
import { Pelicula } from './peliculas.model';
import { Observable } from 'rxjs';
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

  eliminarPelicula(id: number): void {
    this.peliculas = this.peliculas.filter((pelicula) => pelicula.id !== id);
  }

  guardarPelicula(pelicula: Pelicula): Observable<any> {
    // Aquí se debe realizar la lógica para guardar la película en el servidor
    // Por ahora, simularemos una solicitud POST a una API ficticia
    return this.httpClient.post<any>(
      'http://localhost:4200/pelicula',
      pelicula
    );
  }
}
