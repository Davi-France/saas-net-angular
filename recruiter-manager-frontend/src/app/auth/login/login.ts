import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  username = '';
  password = '';
  message = '';

  constructor(private auth: AuthService, private router: Router) { }

  login() {
    this.auth.login(this.username, this.password).subscribe({
      next: () => {
        this.message = '';
        this.router.navigate(['/jobs']);
      },
      error: (err) => {
        this.message = 'Login falhou: usuário ou senha inválidos';
        console.error(err);
      }
    });
  }


  register() {
    this.auth.register(this.username, this.password).subscribe({
      next: () => {
        this.message = 'Usuário registrado com sucesso! Faça login.';
      },
      error: (err) => {
        this.message = 'Erro ao registrar usuário';
        console.error(err);
      }
    });
  }
}
