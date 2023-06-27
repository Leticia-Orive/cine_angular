import { Injectable } from '@angular/core';
import { Cine } from '../cine/cine.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CineService {
  private cines: Cine[] = [];

  constructor() {
    // Inicializar algunos cines de ejemplo
    this.cines = [
      {
        id: 1,
        nombre: 'Cine A',
        cif: 'A09876543',
        direccion: 'Dirección A',
        provincia: 'Madrid',
        codigo_postal: 13478,
        correo: 'cineA@gmail.com',
        telefono: 123456789,
      },
      {
        id: 2,
        nombre: 'Cine B',
        cif: 'A04876543',
        direccion: 'Dirección B',
        provincia: 'Madrid',
        codigo_postal: 13478,
        correo: 'cineB@gmail.com',
        telefono: 987654321,
      },
    ];
  }

  getCines(): Cine[] {
    return this.cines;
  }

  getCineById(id: number): Cine | undefined {
    return this.cines.find((cine) => cine.id === id);
  }

  agregarCine(cine: Cine): void {
    this.cines.push(cine);
  }

  actualizarCine(cine: Cine): void {
    const index = this.cines.findIndex((c) => c.id === cine.id);
    if (index !== -1) {
      this.cines[index] = cine;
    }
  }

  eliminarCine(id: number): void {
    const index = this.cines.findIndex((cine) => cine.id === id);
    if (index !== -1) {
      this.cines.splice(index, 1);
    }
  }
  guardarCine(cine: Cine): Observable<Cine> {
    // Lógica para guardar el cine en la base de datos o en una API
    // ...

    // Después de guardar el cine, agrega el cine guardado a la lista de cines existente
    this.cines.push(cine);

    // Devuelve el cine guardado como observable
    return of(cine);
  }
}
