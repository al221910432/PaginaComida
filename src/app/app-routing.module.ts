import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path:'' , redirectTo:'inicio' , pathMatch:'full'}, // Cambia 'InicioComponent' a 'AppComponent'
  { path: 'login', component: LoginComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'product', component: ProductComponent },
  { path: 'product-details', component: ProductDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'about', component: AboutComponent },
  // Otras rutas de tu aplicación
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
  export const routingComponents = [LoginComponent,AppComponent,RegisterComponent,InicioComponent,ProductComponent,ProductDetailsComponent,CartComponent,AboutComponent];

