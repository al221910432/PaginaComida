import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  register(username: string, password: string): Observable<any> {
    // Define la URL de tu backend para el registro de usuarios
    const registerUrl = 'URL_DE_TU_BACKEND/registro'; // Reemplaza con la URL real

    // Crea un objeto con los datos del usuario a registrar
    const userData = { username, password };

    // Realiza una solicitud POST al backend para registrar al usuario
    return this.http.post(registerUrl, userData);
  }
}
