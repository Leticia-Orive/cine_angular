// registro.component.ts
import { Component } from '@angular/core';
import { RegistroData } from './registro.model';
import { RegistroService } from './registro.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent {
  registroData: RegistroData = {
    nombre: '',
    correoElectronico: '',
    password: '',
  };

  constructor(private registroService: RegistroService) {}

  registrar() {
    this.registroService.registrar(this.registroData).subscribe(
      () => {
        // Registro exitoso, redireccionar a la página de login
      },
      (error) => {
        // Mostrar mensaje de error u otra acción
      }
    );
  }
}
