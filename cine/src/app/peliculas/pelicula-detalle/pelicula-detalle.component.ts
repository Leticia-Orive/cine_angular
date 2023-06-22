import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pelicula } from '../peliculas.model';
import { PeliculaService } from '../peliculas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pelicula-detalle',
  templateUrl: './pelicula-detalle.component.html',
  styleUrls: ['./pelicula-detalle.component.css'],
})
export class PeliculaDetalleComponent implements OnInit {
  pelicula: Pelicula | null | undefined; // Declare the 'pelicula' property

  constructor(
    private route: ActivatedRoute,
    private peliculaService: PeliculaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getPeliculaDetalle();
  }

  getPeliculaDetalle(): void {
    const idParam = this.route.snapshot.paramMap.get('id'); // Obtener el ID de la película
    //desde el parámetro de la ruta
    if (idParam === null) {
      console.error('El parametro ID es nulo.');
      return;
    }
    const id = +idParam;
    if (isNaN(id)) {
      console.error('El parámetro ID no es un número válido.');
      return;
    }

    this.pelicula = this.peliculaService.getPelicula(id);
    if (this.pelicula === null) {
      console.error('no se encontro la pelicula');
    }
  }
  eliminarPelicula(): void {
    if (this.pelicula) {
      this.peliculaService.eliminarPelicula(this.pelicula.id);

      // Movie deleted successfully, navigate to the movie list page
      this.router.navigate(['/peliculas/lista-peliculas']);

      (error: any) => {
        // Handle the error appropriately
        console.error('Error deleting movie:', error);
      };
    } else {
      console.error('Movie is null.'); // Handle the case when pelicula is null
    }
  }
}
