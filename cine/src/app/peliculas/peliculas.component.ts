import { Component } from '@angular/core';
import { Pelicula } from './peliculas.model';
import { PeliculaService } from './peliculas.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
})
export class PeliculasComponent {
  peliculaSeleccionada: Pelicula | null = null;
  modo: string = 'lista';
  mensajeExito: string = '';
  constructor(private peliculaService: PeliculaService) {}
  peliculas: Pelicula[] = [
    {
      id: 1,
      titulo: 'Amor al sol',
      genero: 'Comedia romántica',
      director: 'R.C. Newey',
      duracion: 82,
      sinopsis:
        'Cuando la creadora de una exitosa aplicación de citas se compromete, regresa a su pueblo para contarle la noticia a su padre, pero allí se cruza con un viejo amor del instituto y vuelve a sentir algo por él. ',
      year: 2019,
    },
    {
      id: 2,
      titulo: 'Pinocho de Guillermo del Toro',
      genero: 'fantasía oscura',
      director: 'Guillermo del Toro Mark Gustafson',
      duracion: 120,
      sinopsis:
        'musical mexicano-estadounidense-italiano hecha en animación en volumen, perteneciente al, Está basada en las ilustraciones de Gris Grimly de la novela italiana Las aventuras de Pinocho ',
      year: 2002,
    },
    {
      id: 3,
      titulo: 'Oso intoxicado · Oso vicioso',
      genero: 'terror',
      director: 'Elizabeth Banks',
      duracion: 120,
      sinopsis:
        'Está inspirada en la historia real de un oso negro estadounidense que ingirió una bolsa llena de cocaína en 1985 y cuenta con un reparto coral que incluye a Keri Russell, O Shea Jackson Jr., Christian Convery, Alden Ehrenreich, Jesse Tyler Ferguson, Brooklynn Prince, Isiah Whitlock Jr., Kristofer Hivju, Hannah Hoekstra, Margo Martindale, Matthew Rhys, y Ray Liotta en una de sus últimas actuaciones antes de su muerte el 26 de mayo de 2022.',
      year: 1985,
    },
  ];
  ngOnInit(): void {
    // Lógica de inicialización si es necesario
  }

  verDetalle(pelicula: Pelicula): void {
    this.peliculaSeleccionada = pelicula;
    this.modo = 'detalle';
  }

  mostrarFormulario(): void {
    this.peliculaSeleccionada = null;
    this.modo = 'form';
  }

  regresarALista(): void {
    this.modo = 'lista';
  }
  guardarPelicula(pelicula: Pelicula): void {
    // Llama al método del servicio para guardar la película
    this.peliculaService.guardarPelicula(pelicula).subscribe(
      (Response) => {
        //Película guardada exitosamente
        this.mensajeExito = 'Película guardada exitosamente';
        // Realizar otras acciones adicionales si es necesario

        // Limpiar el mensaje después de un tiempo
        setTimeout(() => {
          this.mensajeExito = '';
        }, 3000); // Por ejemplo, ocultar el mensaje después de 3 segundos (3000 ms)
      },
      (error) => {
        // Aquí puedes agregar la lógica para manejar el error de la operación
        console.error('Error al guardar la película:', error);
      }
    );
  }
  editarPelicula(pelicula: Pelicula): void {
    this.peliculaSeleccionada = pelicula;
    this.modo = 'editar';
  }

  borrarPelicula(pelicula: Pelicula): void {
    // Llama al método del servicio para eliminar la película
    this.peliculaService.eliminarPelicula(pelicula.id);
  }
}
