import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Actor } from './actor.model';
import { ActoresService } from './actores.service';

@Component({
  selector: 'app-actores',
  templateUrl: './actores.component.html',
  styleUrls: ['./actores.component.css'],
})
export class ActoresComponent implements OnInit {
  actores: Actor[] = [];
  formulario: FormGroup;
  actorSeleccionado: Actor | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private actoresService: ActoresService
  ) {
    this.formulario = this.formBuilder.group({
      id: [0],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      edad: ['', Validators.required],
      genero: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.obtenerActores();
  }

  obtenerActores(): void {
    this.actoresService.obtenerActores().subscribe((actores) => {
      this.actores = actores;
    });
  }

  guardarActor(): void {
    if (this.formulario.valid) {
      const actor: Actor = this.formulario.value;
      if (actor.id === 0) {
        this.actoresService.agregarActor(actor).subscribe(() => {
          this.resetFormulario();
          this.obtenerActores();
        });
      } else {
        this.actoresService.editarActor(actor).subscribe(() => {
          this.resetFormulario();
          this.obtenerActores();
        });
      }
    }
  }

  seleccionarActor(actor: Actor): void {
    this.actorSeleccionado = actor;
    this.formulario.patchValue(actor);
  }

  eliminarActor(id: number): void {
    this.actoresService.eliminarActor(id).subscribe(() => {
      this.resetFormulario();
      this.obtenerActores();
    });
  }

  resetFormulario(): void {
    this.actorSeleccionado = undefined;
    this.formulario.reset();
    this.formulario.controls['id'].setValue(0);
  }
}
