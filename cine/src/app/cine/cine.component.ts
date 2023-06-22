import { Component } from '@angular/core';
import { Cine } from './cine.model';
import { CineService } from './cine.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-cine',
  templateUrl: './cine.component.html',
  styleUrls: ['./cine.component.css'],
})
export class CineComponent {
  currentRoute: string = '';
  cine: Cine = {
    id: 1,
    nombre: 'Cine ABC',
    cif: '12345678',
    direccion: 'Calle Principal 123',
    email: 'cine@abc.com',
    provincia: 'Ciudad',
    codigoPostal: '12345',
    telefono: '987654321',
  };

  constructor(
    private cineService: CineService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        const firstChild = this.activatedRoute.firstChild;
        if (firstChild && firstChild.routeConfig) {
          this.currentRoute = firstChild.routeConfig.path || ''; // Asignar la ruta activa o un valor predeterminado
        } else {
          this.currentRoute = ''; // Valor predeterminado en caso de que la propiedad sea nula
        }
      });
  }

  guardarCine(): void {
    // Lógica para guardar el cine
    console.log('Cine guardado:', this.cine);
  }
  actualizarCine() {
    this.cineService.actualizarCine(this.cine).subscribe(() => {
      // Realizar acciones después de actualizar el cine
    });
  }
}
