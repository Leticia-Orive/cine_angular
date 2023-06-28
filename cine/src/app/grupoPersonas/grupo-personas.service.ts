import { Injectable } from '@angular/core';
import { GrupoPersonas } from './grupo-personas.model';

@Injectable({
  providedIn: 'root',
})
export class GrupoPersonasService {
  private grupos: GrupoPersonas[] = [
    { id: 1, nombre: 'Familia Numerosa', tipoDescuento: '20%' },
    { id: 2, nombre: 'Minusválidos', tipoDescuento: '30%' },
    { id: 3, nombre: 'Pensionistas', tipoDescuento: '50%' },
  ];

  constructor() {}

  getGrupos(): GrupoPersonas[] {
    return this.grupos;
  }
}
