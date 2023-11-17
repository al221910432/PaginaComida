// Importa la clase Router
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  // Define un arreglo para almacenar los usuarios registrados
  users: any[] = [];

  userData = {
    name: '',
    username: '',
    email: '',
    password: '',
    repeatPassword: '',
    gender: 'male',
    age: 18,
  };

  constructor(private router: Router) {}

  register() {
    // Validación simple de campos requeridos
    if (!this.userData.name || !this.userData.username || !this.userData.email || !this.userData.password || !this.userData.repeatPassword) {
      alert('Todos los campos son requeridos. Por favor, rellena todos los campos.');
      return;
    }

    // Verifica si el usuario ya existe
    const userExists = this.users.some((user) => user.username === this.userData.username);

    if (userExists) {
      alert('El nombre de usuario ya existe. Por favor, elige otro.');
      return;
    }

    // Si el usuario no existe y los campos están llenos, agrega el nuevo usuario al arreglo
    this.users.push({
      name: this.userData.name,
      username: this.userData.username,
      email: this.userData.email,
      password: this.userData.password,
      gender: this.userData.gender,
      age: this.userData.age,
    });

    // Almacena los usuarios registrados en localStorage
    localStorage.setItem('users', JSON.stringify(this.users));

    // Limpia el formulario después del registro
    this.userData.name = '';
    this.userData.username = '';
    this.userData.email = '';
    this.userData.password = '';
    this.userData.repeatPassword = '';
    this.userData.gender = 'male';
    this.userData.age = 18;

    alert('Registro exitoso. Ahora puedes iniciar sesión.');

    // Muestra los usuarios en la consola
    console.log('Usuarios registrados:', this.users);
    this.router.navigate(['/inicio']);
  }
}





