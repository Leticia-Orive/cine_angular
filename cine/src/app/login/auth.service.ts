import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  login(username: string, password: string): boolean {
    // Aquí iría la lógica de autenticación
    // Por ejemplo, verificar las credenciales y devolver un valor booleano que indique si la autenticación es exitosa
    return true; // En este ejemplo, se devuelve siempre 'true' para simular una autenticación exitosa
  }
}
