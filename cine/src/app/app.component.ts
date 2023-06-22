import { Component } from '@angular/core';
import { AuthService } from './login/auth.service';
import { Clientes } from './cliente/cliente.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public authService: AuthService) {}
  title = 'cine';
  clientes: Clientes[] = [
    {
      id: 1,
      nombre: 'Cliente 1',
      cif: 'se23w',
      direccion: '',
      provincia: '',
      codigoPostal: 12563,
      email: 'cliente1@example.com',
      telefono: 123456789,
    },
    {
      id: 2,
      nombre: 'Cliente 2',
      cif: 'as234',
      direccion: '',
      provincia: '',
      codigoPostal: 71478,
      email: 'cliente2@example.com',
      telefono: 987654321,
    },
    // Agrega más clientes aquí...
  ];
}
