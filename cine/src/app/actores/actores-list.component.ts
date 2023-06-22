import { Component, OnInit } from '@angular/core';
import { Actor } from './actores.model';
import { ActoresService } from './actores.service';

@Component({
  selector: 'app-actores-list',
  templateUrl: './actores-list.component.html',
  styleUrls: ['./actores-list.component.css'],
})
export class ActoresListComponent implements OnInit {
  actores: Actor[] = []; // Propiedad para almacenar la lista de actores
  actorEnEdicion: Actor | null = null;
  editando = false;
  actorForm: any = {}; //Define actorForm property

  constructor(actoresService: ActoresService) {
    // Inicializar la lista de actores en el constructor
    this.actores = actoresService.getActores();
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  agregarActor(actorData: any) {
    // Lógica para agregar un nuevo actor a la lista
    const nuevoActor: Actor = {
      nombre: actorData.nombre,
      edad: actorData.edad,
      id: 0,
      apellido: '',
    };

    this.actores.push(nuevoActor);
    this.actorForm = {}; // Clear the form
  }

  editarActor(actor: Actor): void {
    const actorExistente = this.actores.find((a) => a.id === actor.id);
    if (actorExistente) {
      this.actorEnEdicion = { ...actorExistente };
      this.editando = true;
    } else {
      console.error('No se encontró el actor a editar');
    }
  }

  eliminarActor(actor: Actor): void {
    // Lógica para eliminar un actor de la lista
    const index = this.actores.indexOf(actor);
    if (index !== -1) {
      this.actores.splice(index, 1);
    }
  }
}
