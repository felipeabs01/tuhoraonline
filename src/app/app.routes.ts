import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ReservaComponent } from './components/reserva/reserva.component';
import { AuthGuardService } from './services/auth-guard.service';
import { ReservaNuevaComponent } from './components/reserva/reserva-nueva/reserva-nueva.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { FichaComponent } from './components/ficha/ficha.component';
import { FichaNuevaComponent } from './components/ficha/ficha-nueva/ficha-nueva.component';
import { ClienteNuevoComponent } from './components/cliente/cliente-nuevo/cliente-nuevo.component';


export const ROUTES: Routes = [

    {path:'inicio', component:HomeComponent},
    {path:'reserva', component:ReservaComponent,canActivate:[AuthGuardService]},  
    {path:'nueva-reserva', component:ReservaNuevaComponent,canActivate:[AuthGuardService]},
    {path:'cliente', component:ClienteComponent,canActivate:[AuthGuardService]},
    {path:'nuevo-cliente', component:ClienteNuevoComponent,canActivate:[AuthGuardService]},
    {path:'ficha', component:FichaComponent,canActivate:[AuthGuardService]},
    {path:'nueva-ficha', component:FichaNuevaComponent,canActivate:[AuthGuardService]},
    
   
    {path:'', pathMatch:'full', redirectTo:'inicio'},
    {path:'**', pathMatch:'full', redirectTo:'inicio'}

];