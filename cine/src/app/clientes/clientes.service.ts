import { Injectable } from '@angular/core';
import { Cliente } from '../clientes/clientes.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private apiUrl = 'http://localhost:4200/clientes';

  constructor(private http: HttpClient) {}

  registrarCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.apiUrl, cliente);
  }

  obtenerClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.apiUrl);
  }

  actualizarCliente(cliente: Cliente): Observable<Cliente> {
    const url = `${this.apiUrl}/${cliente.id}`;
    return this.http.put<Cliente>(url, cliente);
  }

  eliminarCliente(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
