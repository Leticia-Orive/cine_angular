import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Login } from './login.model';

@Component({
  selector: 'app-login',
  template: `
    <h2>Login</h2>
    <form (submit)="onSubmit()">
      <div>
        <label>Username:</label>
        <input
          type="text"
          [(ngModel)]="loginData.username"
          name="username"
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          [(ngModel)]="loginData.password"
          name="password"
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
  `,
})
export class LoginComponent {
  loginData: Login = {
    username: '',
    password: '',
  };

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    this.authService.login(this.loginData).subscribe((loggedIn: boolean) => {
      if (loggedIn) {
        this.router.navigate(['/app']);
      } else {
        alert('Login failed. Invalid username or password.');
      }
    });
  }
}
