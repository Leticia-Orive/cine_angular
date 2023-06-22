import { Component } from '@angular/core';
import { Cine } from '../cine.model';
import { CineService } from '../cine.service';

@Component({
  selector: 'app-cine-create',
  templateUrl: './cine-create.component.html',
  styleUrls: ['./cine-create.component.css'],
})
export class CineCreateComponent {
  cine: Cine = {
    id: 0,
    nombre: '',
    cif: '',
    direccion: '',
    email: '',
    provincia: '',
    codigoPostal: '',
    telefono: '',
  };
  constructor(private cineService: CineService) {}

  crearCine() {
    this.cineService.crearCine(this.cine).subscribe(
      (response) => {
        // Manejar la respuesta del servidor en caso de éxito
        console.log('Cine creado exitosamente:', response);
        // Aquí puedes realizar alguna acción adicional, como redireccionar a otra página o actualizar la lista de cines, etc.
      },
      (error) => {
        // Manejar el error en caso de que ocurra
        console.error('Error al crear el cine:', error);
        // Aquí puedes mostrar un mensaje de error al usuario o realizar alguna otra acción
      }
    );
  }
}
