
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';




import { AppRoutingModule, routingComponents } from './app-routing.module';



import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component'; // Importa el componente de inicio de sesión
import { RegisterComponent } from './register/register.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProductComponent } from './product/product.component';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { AboutComponent } from './about/about.component';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    routingComponents,
    InicioComponent,
    ProductComponent,
    HeaderComponent,
    FooterComponent,
    ProductDetailsComponent,
    CartComponent,
    AboutComponent

  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    AppRoutingModule,
    IonicModule.forRoot()

  ],
  
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
