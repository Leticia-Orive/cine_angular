import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Cine } from '../cine.model';
import { CineService } from '../cine.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cine-edit',
  templateUrl: './cine-edit.component.html',
  styleUrls: ['./cine-edit.component.css'],
})
export class CineEditComponent implements OnInit {
  cine: Cine = {} as Cine; // Asignar un objeto vacío

  constructor(
    private route: ActivatedRoute,
    private cineService: CineService
  ) {}

  ngOnInit() {
    const cineIdParam = this.route.snapshot.paramMap.get('id');
    if (cineIdParam !== null) {
      const cineId = +cineIdParam;
      this.getCine(cineId);
    } else {
      // Manejar el caso cuando el ID es null
      console.error('El ID del cine es nulo.');
    }
  }

  getCine(id: number) {
    this.cineService.getCine(id).subscribe((cine) => (this.cine = cine));
  }

  actualizarCine() {
    if (this.cine) {
      this.cineService.actualizarCine(this.cine).subscribe(() => {
        // Lógica adicional después de actualizar el cine
      });
    } else {
      console.error('El objeto cine es nulo.');
    }
  }
}

@NgModule({
  declarations: [CineEditComponent],
  imports: [CommonModule, FormsModule],
})
export class CineEditModule {}
