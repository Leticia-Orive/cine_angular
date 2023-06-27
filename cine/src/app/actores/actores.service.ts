import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Actor } from './actor.model';

@Injectable({
  providedIn: 'root',
})
export class ActoresService {
  private actores: Actor[] = [];

  constructor() {}

  obtenerActores(): Observable<Actor[]> {
    return of(this.actores);
  }

  obtenerActor(id: number): Observable<Actor | undefined> {
    const actor = this.actores.find((a) => a.id === id);
    return of(actor);
  }

  agregarActor(actor: Actor): Observable<Actor> {
    actor.id = this.obtenerNuevoId();
    this.actores.push(actor);
    return of(actor);
  }

  editarActor(actor: Actor): Observable<Actor | undefined> {
    const index = this.actores.findIndex((a) => a.id === actor.id);
    if (index !== -1) {
      this.actores[index] = actor;
      return of(actor);
    }
    return of(undefined);
  }

  eliminarActor(id: number): Observable<boolean> {
    const index = this.actores.findIndex((a) => a.id === id);
    if (index !== -1) {
      this.actores.splice(index, 1);
      return of(true);
    }
    return of(false);
  }

  private obtenerNuevoId(): number {
    const ids = this.actores.map((a) => a.id);
    const maxId = Math.max(...ids);
    return maxId + 1;
  }
}
