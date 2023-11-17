import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  productos = [
    {
      id: 1,
      nombre: 'Pop’s Carrots',
      descripcion: 'Una explosión de alivio',
      precio: 5.99,
      imagen: 'url_de_la_imagen.jpg'
    },
    // Agrega más productos aquí
  ];

  constructor() { }

  obtenerProductos() {
    return this.productos;
  }
}
