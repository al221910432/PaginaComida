// login.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  userData = {
    username: '',
    password: '',
  };

  constructor(private router: Router) {}

  login() {
    // Obtiene los usuarios registrados desde localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    // Verifica si el usuario existe en la lista de usuarios registrados
    const user = users.find((u:any) => u.username === this.userData.username && u.password === this.userData.password);

    if (user) {
      // Inicio de sesión exitoso, redirige a una página segura
      this.router.navigate(['/inicio']);
      alert("Sesion iniciada");
    } else {
      // Inicio de sesión fallido, muestra un mensaje de error
      alert('Inicio de sesión fallido. Verifica tus credenciales.');
    }
  }
}


