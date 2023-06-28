// registro.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegistroData } from './registro.model';

@Injectable({
  providedIn: 'root',
})
export class RegistroService {
  private registroUrl = 'api/registro'; // URL del endpoint para el registro

  constructor(private http: HttpClient) {}

  registrar(registroData: RegistroData) {
    // Enviar los datos de registro al servidor
    return this.http.post(this.registroUrl, registroData);
  }
}
