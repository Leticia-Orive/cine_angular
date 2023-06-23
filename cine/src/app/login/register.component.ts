import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user.model';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  email: string = '';
  error: string = '';
  user: User = {
    username: '',
    password: '',
    email: '',
  };

  constructor(private router: Router, private authService: AuthService) {}

  register(): void {
    this.user.username = this.username;
    this.user.password = this.password;
    this.user.email = this.email;

    this.authService.register(this.user).subscribe(
      (response) => {
        // Registro exitoso, redirigir al cine
        this.router.navigate(['/cines']);
        // Puedes usar el servicio Router para redirigir al usuario
      },
      (error) => {
        // Manejo de error durante el registro
        this.error =
          'Ocurrió un error durante el registro. Por favor, inténtelo nuevamente.';
      }
    );
  }
}
