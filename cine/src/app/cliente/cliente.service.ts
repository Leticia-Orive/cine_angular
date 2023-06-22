import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Clientes } from './cliente.model';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private apiURL = 'http://localhost:3000/clientes';

  constructor(private http: HttpClient) {}

  getClientes(): Observable<Clientes[]> {
    return this.http.get<Clientes[]>(this.apiURL);
  }
  obtenerCliente(): Observable<Clientes[]> {
    return this.http.get<Clientes[]>(this.apiURL);
  }
  agregarCliente(cliente: Clientes): Observable<Clientes> {
    return this.http.post<Clientes>(this.apiURL, cliente);
  }
  actualizarCliente(cliente: Clientes): Observable<Clientes> {
    const url = '$(this.apiUrl)/$(cliente.id)';
    return this.http.put<Clientes>(url, cliente);
  }
  eliminarCliente(id: number): Observable<void> {
    const url = '${this.apiUrl}/${id}';
    return this.http.delete<void>(url);
  }
}
