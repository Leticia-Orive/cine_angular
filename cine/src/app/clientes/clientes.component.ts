import { Component, OnInit } from '@angular/core';
import { Cliente } from './clientes.model';
import { ClienteService } from './clientes.service';
import { GrupoPersonas } from '../grupoPersonas/grupo-personas.model';
import { GrupoPersonasService } from '../grupoPersonas/grupo-personas.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
})
export class ClienteComponent implements OnInit {
  clientes: Cliente[] = [];
  nuevoCliente: Cliente = {
    id: 0,
    nombre: '',
    apellido: '',
    correoElectronico: '',
    cif: '',
    direccion: '',
    provincia: '',
    codigo_postal: 0,
    telefono: 0,
    contraseña: '',
    grupo: '',
  };
  clienteSeleccionado: Cliente | null = null;
  grupoSeleccionado: GrupoPersonas | null = null;
  grupos: GrupoPersonas[] = [];

  constructor(
    private clienteService: ClienteService,
    private grupoPersonasService: GrupoPersonasService
  ) {}

  ngOnInit(): void {
    this.obtenerClientes();
    this.grupos = this.grupoPersonasService.getGrupos();
  }

  obtenerClientes(): void {
    this.clienteService.obtenerClientes().subscribe((clientes) => {
      this.clientes = clientes;
    });
  }

  agregarCliente(): void {
    this.clienteService
      .registrarCliente(this.nuevoCliente)
      .subscribe((clienteRegistrado) => {
        this.clientes.push(clienteRegistrado);
        this.nuevoCliente = {
          id: 0,
          nombre: '',
          apellido: '',
          correoElectronico: '',
          cif: '',
          direccion: '',
          provincia: '',
          codigo_postal: 0,
          telefono: 0,
          contraseña: '',
          grupo: '',
        };
      });
  }

  editarCliente(cliente: Cliente): void {
    this.clienteSeleccionado = cliente;
  }

  actualizarCliente(): void {
    if (this.clienteSeleccionado) {
      this.clienteService
        .actualizarCliente(this.clienteSeleccionado)
        .subscribe((clienteActualizado) => {
          const index = this.clientes.findIndex(
            (c) => c.id === clienteActualizado.id
          );
          if (index !== -1) {
            this.clientes[index] = clienteActualizado;
          }
          this.clienteSeleccionado = null;
        });
    }
  }

  eliminarCliente(id: number): void {
    this.clienteService.eliminarCliente(id).subscribe(() => {
      this.clientes = this.clientes.filter((c) => c.id !== id);
    });
  }
}
