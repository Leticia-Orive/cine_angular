import { Injectable } from '@angular/core';
import {
  FamiliaNumerosa,
  Minusvalido,
  Pensionista,
} from './grupo-pesonas.model';

@Injectable({
  providedIn: 'root',
})
export class GrupoService {
  private familiaNumerosa: FamiliaNumerosa[] = [
    { id: 1, nombre: 'Familia Numerosa 1', descuento: 20 },
    { id: 2, nombre: 'Familia Numerosa 2', descuento: 30 },
    // Agrega más familias numerosas según sea necesario
  ];

  private minusvalidos: Minusvalido[] = [
    { id: 1, nombre: 'Minusválido 1', descuento: 50 },
    { id: 2, nombre: 'Minusválido 2', descuento: 60 },
    // Agrega más minusválidos según sea necesario
  ];

  private pensionistas: Pensionista[] = [
    { id: 1, nombre: 'Pensionista 1', descuento: 40 },
    { id: 2, nombre: 'Pensionista 2', descuento: 50 },
    // Agrega más pensionistas según sea necesario
  ];

  constructor() {}

  getFamiliasNumerosas(): FamiliaNumerosa[] {
    return this.familiaNumerosa;
  }

  getMinusvalidos(): Minusvalido[] {
    return this.minusvalidos;
  }

  getPensionistas(): Pensionista[] {
    return this.pensionistas;
  }
}
