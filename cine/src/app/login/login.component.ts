import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  error: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  login() {
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        // Inicio de sesión exitoso, redirigir al usuario a la página de cines
        this.router.navigate(['/cines']);
      },
      (error) => {
        // Error en el inicio de sesión, mostrar un mensaje de error
        this.error = 'Credenciales inválidas. Por favor, intenta nuevamente.';
      }
    );
  }
}
