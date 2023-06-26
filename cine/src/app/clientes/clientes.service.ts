import { Injectable } from '@angular/core';
import { Cliente } from '../clientes/clientes.model';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private clientes: Cliente[] = [];

  constructor() {}

  obtenerClientes(): Cliente[] {
    return this.clientes;
  }

  agregarCliente(cliente: Cliente): void {
    this.clientes.push(cliente);
  }

  actualizarCliente(cliente: Cliente): void {
    const index = this.clientes.findIndex((c) => c.id === cliente.id);
    if (index !== -1) {
      this.clientes[index] = cliente;
    }
  }

  eliminarCliente(id: number): void {
    const index = this.clientes.findIndex((c) => c.id === id);
    if (index !== -1) {
      this.clientes.splice(index, 1);
    }
  }
}
