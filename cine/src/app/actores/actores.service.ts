import { Injectable } from '@angular/core';
import { Actor } from './actores.model';

@Injectable({
  providedIn: 'root',
})
export class ActoresService {
  getActores(): Actor[] {
    throw new Error('Method not implemented.');
  }
  private actores: Actor[] = [];

  constructor() {}

  // Método para agregar un actor
  agregarActor(actor: Actor) {
    this.actores.push(actor);
  }

  // Método para editar un actor
  editarActor(actor: Actor) {
    // Encuentra el índice del actor en el arreglo y reemplaza sus datos
    const index = this.actores.findIndex((a) => a.id === actor.id);
    if (index !== -1) {
      this.actores[index] = actor;
    }
  }

  // Método para eliminar un actor
  eliminarActor(actor: Actor) {
    // Encuentra el índice del actor en el arreglo y elimínalo
    const index = this.actores.findIndex((a) => a.id === actor.id);
    if (index !== -1) {
      this.actores.splice(index, 1);
    }
  }

  // Otros métodos según tus necesidades
}
