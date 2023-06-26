import { Component } from '@angular/core';
import { Cliente } from './clientes.model';
import { ClienteService } from './clientes.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
})
export class ClienteComponent {
  clientes: Cliente[] = [];
  nuevoCliente: Cliente = {
    id: 0,
    nombre: '',
    apellido: '',
    correo: '',
    cif: '',
    direccion: '',
    provincia: '',
    codigo_postal: 0,
    telefono: 0,
  };
  clienteSeleccionado: Cliente | null = null;

  constructor(private clienteService: ClienteService) {
    this.clientes = clienteService.obtenerClientes();
  }

  agregarCliente(): void {
    // Generar un nuevo ID para el cliente
    const nuevoId =
      this.clientes.length > 0
        ? this.clientes[this.clientes.length - 1].id + 1
        : 1;
    this.nuevoCliente.id = nuevoId;

    // Agregar el nuevo cliente al servicio
    this.clienteService.agregarCliente(this.nuevoCliente);

    // Reiniciar el formulario
    this.nuevoCliente = {
      id: 0,
      nombre: '',
      apellido: '',
      correo: '',
      cif: '',
      direccion: '',
      provincia: '',
      codigo_postal: 0,
      telefono: 0,
    };
  }

  editarCliente(cliente: Cliente): void {
    // Establecer el cliente seleccionado para la edición
    this.clienteSeleccionado = cliente;
  }

  actualizarCliente(): void {
    if (this.clienteSeleccionado) {
      // Actualizar el cliente en el servicio
      this.clienteService.actualizarCliente(this.clienteSeleccionado);

      // Reiniciar el cliente seleccionado
      this.clienteSeleccionado = null;
    }
  }

  eliminarCliente(id: number): void {
    // Eliminar el cliente del servicio
    this.clienteService.eliminarCliente(id);
  }
}
