import { Component, OnInit } from '@angular/core';
import {
  FamiliaNumerosa,
  Minusvalido,
  Pensionista,
} from './grupo-pesonas.model';
import { GrupoService } from './grupo.service';

@Component({
  selector: 'app-grupo',
  templateUrl: './grupo.component.html',
  styleUrls: ['./grupo.component.css'],
})
export class GrupoComponent implements OnInit {
  familiasNumerosas: FamiliaNumerosa[] = [];
  minusvalidos: Minusvalido[] = [];
  pensionistas: Pensionista[] = [];

  constructor(private grupoService: GrupoService) {}
  ngOnInit() {
    this.familiasNumerosas = this.grupoService.getFamiliasNumerosas();
    this.minusvalidos = this.grupoService.getMinusvalidos();
    this.pensionistas = this.grupoService.getPensionistas();
  }
}
