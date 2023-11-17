import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../services/producto.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  empresa = {
    descripcion: 'Una empresa que elabora snacks a base de zanahoria adicionado con amaranto, limón y miel de agave para personas que padecen de estrés oxidativo.'
  };

  productos:any = [];

  constructor(private router: Router,private productoService: ProductoService) { }

  redirectToLogin() {
    this.router.navigate(['/login']);
  }

  redirectToProduct() {
    this.router.navigate(['/product']);
  }
  
  redirectToRegister() {
    this.router.navigate(['/register']);
  }
  
  ngOnInit() {
    this.productos = this.productoService.obtenerProductos();
  }

  agregarAlCarrito() {
    // Implementa lógica para agregar productos al carrito aquí
  }

}
