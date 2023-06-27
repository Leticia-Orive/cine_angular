import { Component } from '@angular/core';
import { SalaCine } from './sala.model';
import { SalaCinesService } from './salas.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sala-cines',
  templateUrl: './salas.component.html',
  styleUrls: ['./salas.component.css'],
})
export class SalaCinesComponent {
  salas: SalaCine[] = [];
  salaSeleccionada: SalaCine | undefined;
  modoEdicion = false;
  salaForm: FormGroup;
  constructor(
    private salaCinesService: SalaCinesService,
    private formBuilder: FormBuilder
  ) {
    this.salas = salaCinesService.obtenerSalas();
    this.salaForm = this.formBuilder.group({
      // Aquí puedes definir los campos y validadores para el formulario
      // Ejemplo:
      nombre: ['', Validators.required],
      capacidad: ['', Validators.required],
      ubicacion: ['', Validators.required],
    });
  }

  seleccionarSala(sala: SalaCine): void {
    this.salaSeleccionada = sala;
    this.modoEdicion = true;
  }

  cancelarEdicion(): void {
    this.salaSeleccionada = undefined;
    this.modoEdicion = false;
  }

  guardarSala(nuevaSala: SalaCine): void {
    if (this.modoEdicion && this.salaSeleccionada) {
      this.salaCinesService.editarSala(this.salaSeleccionada.id, nuevaSala);
    } else {
      this.salaCinesService.agregarSala(nuevaSala);
    }
    this.cancelarEdicion();
  }

  eliminarSala(id: number): void {
    this.salaCinesService.eliminarSala(id);
    if (this.salaSeleccionada?.id === id) {
      this.cancelarEdicion();
    }
  }
}
