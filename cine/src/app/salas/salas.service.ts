import { Injectable } from '@angular/core';
import { SalaCine } from './sala.model';

@Injectable({
  providedIn: 'root',
})
export class SalaCinesService {
  private salas: SalaCine[] = [];

  constructor() {}

  obtenerSalas(): SalaCine[] {
    return this.salas;
  }

  obtenerSala(id: number): SalaCine | undefined {
    return this.salas.find((sala) => sala.id === id);
  }

  agregarSala(sala: SalaCine): void {
    this.salas.push(sala);
  }

  editarSala(id: number, nuevaSala: SalaCine): void {
    const salaIndex = this.salas.findIndex((sala) => sala.id === id);
    if (salaIndex !== -1) {
      this.salas[salaIndex] = nuevaSala;
    }
  }

  eliminarSala(id: number): void {
    this.salas = this.salas.filter((sala) => sala.id !== id);
  }
}
