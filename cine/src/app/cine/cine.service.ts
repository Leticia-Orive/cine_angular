import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cine } from './cine.model';

@Injectable({
  providedIn: 'root',
})
export class CineService {
  private apiUrl = 'http://localhost:4200/cine';

  constructor(private http: HttpClient) {}

  getCines(): Observable<Cine[]> {
    return this.http.get<Cine[]>(this.apiUrl);
  }

  getCine(id: number): Observable<Cine> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Cine>(url);
  }

  crearCine(cine: Cine): Observable<Cine> {
    return this.http.post<Cine>(this.apiUrl, cine);
  }

  actualizarCine(cine: Cine): Observable<Cine> {
    const url = `${this.apiUrl}/${cine.id}`;
    return this.http.put<Cine>(url, cine);
  }

  eliminarCine(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}
