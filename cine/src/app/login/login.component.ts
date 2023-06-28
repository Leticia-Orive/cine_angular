// login.component.ts
import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}
  username: string | undefined;
  password: string | undefined;
  login() {
    // Aquí llamas al método 'login' del servicio 'AuthService' con los datos de inicio de sesión proporcionados por el usuario
    const username = 'nombre-de-usuario';
    const password = 'contraseña';
    const isAuthenticated = this.authService.login(username, password);

    if (isAuthenticated) {
      // Autenticación exitosa, redirige a la página de cines u otra página deseada
      this.router.navigate(['/cine']);
    } else {
      // Autenticación fallida, muestra un mensaje de error o toma alguna otra acción
    }
  }
  registrarCliente() {
    this.router.navigate(['/registro']);
  }
}
