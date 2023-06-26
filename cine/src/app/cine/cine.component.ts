import { Component } from '@angular/core';
import { Cine } from './cine.model';
import { CineService } from './cine.service';

@Component({
  selector: 'app-cine',
  templateUrl: './cine.component.html',
  styleUrls: ['./cine.component.css'],
})
export class CineComponent {
  cines: Cine[] = [];
  selectedCine: Cine = {
    nombre: '',
    cif: '',
    direccion: '',
    provincia: '',
    codigo_postal: 0,
    correo: '',
    telefono: 9,
    id: 0,
  };

  constructor(private cineService: CineService) {
    this.cines = this.cineService.getCines();
  }

  onSelectCine(cine: Cine): void {
    this.selectedCine = cine;
  }

  guardarCine(cine: Cine): void {
    if (cine.id) {
      this.cineService.actualizarCine(cine);
    } else {
      this.cineService.agregarCine(cine);
    }
    this.selectedCine;
  }

  eliminarCine(id: number): void {
    this.cineService.eliminarCine(id);
    if (this.selectedCine?.id === id) {
      this.selectedCine;
    }
  }
  updateCineName(newName: string): void {
    if (this.selectedCine) {
      this.selectedCine.nombre = newName;
    }
  }
}
