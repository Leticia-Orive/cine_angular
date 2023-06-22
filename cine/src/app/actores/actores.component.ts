import { Component } from '@angular/core';
import { ActoresService } from './actores.service';
import { Actor } from './actores.model';

@Component({
  selector: 'app-actores',
  templateUrl: './actores.component.html',
  styleUrls: ['./actores.component.css'],
})
export class ActoresComponent {
  actores: Actor[] = [];
  actorForm: any;

  constructor(private actoresService: ActoresService) {}

  agregarActor(actor: Actor) {
    this.actoresService.agregarActor(actor);
  }

  editarActor(actor: Actor) {
    this.actoresService.editarActor(actor);
  }

  eliminarActor(actor: Actor) {
    this.actoresService.eliminarActor(actor);
  }

  // Otros métodos según tus necesidades
}
