import { Component, OnInit } from '@angular/core';
import { ClienteService } from './cliente.service';
import { Clientes } from './cliente.model';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
})
export class ClienteComponent implements OnInit {
  clientes: Clientes[] = [];
  nuevoCliente: Clientes = {
    id: 0,
    nombre: '',
    cif: '',
    email: '',
    telefono: 0,
    direccion: '',
    provincia: '',
    codigoPostal: 0,
  };

  constructor(private clienteService: ClienteService) {}
  ngOnInit(): void {
    this.obtenerCliente();
  }

  obtenerCliente() {
    this.clienteService.obtenerCliente().subscribe((clientes) => {
      this.clientes = clientes;
    });
  }
  agregarCliente() {
    this.clienteService
      .agregarCliente(this.nuevoCliente)
      .subscribe((cliente) => {
        this.clientes.push(cliente);
        this.nuevoCliente = {
          id: 0,
          nombre: '',
          cif: '',
          email: '',
          telefono: 0,
          direccion: '',
          provincia: '',
          codigoPostal: 0,
        };
      });
  }
  eliminarCliente(id: number) {
    this.clienteService.eliminarCliente(id).subscribe(() => {
      this.clientes = this.clientes.filter((cliente) => cliente.id !== id);
    });
  }
}
