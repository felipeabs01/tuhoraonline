import { BrowserModule } from '@angular/platform-browser';
import { NgModule,LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { ReservaComponent } from './components/reserva/reserva.component';

import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ReservaService } from './services/reserva.service';
import localeES from "@angular/common/locales/es";
import { registerLocaleData } from '@angular/common';
import { ConfiguracionService } from './services/configuracion.service';
import { ReservaNuevaComponent } from './components/reserva/reserva-nueva/reserva-nueva.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { FichaComponent } from './components/ficha/ficha.component';
import { FichaNuevaComponent } from './components/ficha/ficha-nueva/ficha-nueva.component';
import { ClienteNuevoComponent } from './components/cliente/cliente-nuevo/cliente-nuevo.component';
import { LoadingComponent } from './components/shared/loading/loading.component';

registerLocaleData(localeES, "es");


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ReservaComponent,
    ReservaNuevaComponent,
    ClienteComponent,
    FichaComponent,
    FichaNuevaComponent,
    ClienteNuevoComponent,
    LoadingComponent,
   
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
     RouterModule.forRoot(ROUTES,{ useHash: true })
    //RouterModule.forRoot(ROUTES,{ enableTracing: true })

    
  ],
 
 
  providers: [AuthService,ReservaService,ConfiguracionService],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
