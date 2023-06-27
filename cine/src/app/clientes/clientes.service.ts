import { Injectable } from '@angular/core';
import { Cliente } from '../clientes/clientes.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private clientes: Cliente[] = [];
  private apiUrl = 'http://localhost:4200/clientes';
  constructor(private http: HttpClient) {}

  registrarCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.apiUrl, cliente);
  }
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
