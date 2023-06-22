import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Login } from './login.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = false;

  constructor() {}

  login(loginData: Login): Observable<boolean> {
    // Aquí puedes agregar la lógica de autenticación
    // Por ahora, simplemente comprobaremos si los datos de inicio de sesión son correctos

    if (loginData.username === 'admin' && loginData.password === 'password') {
      this.loggedIn = true;
      return of(true);
    }

    this.loggedIn = false;
    return of(false);
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  logout(): void {
    this.loggedIn = false;
  }
}
