import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ReservaComponent } from './components/reserva/reserva.component';
import { AuthGuardService } from './services/auth-guard.service';
import { ReservaNuevaComponent } from './components/reserva/reserva-nueva/reserva-nueva.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { FichaComponent } from './components/ficha/ficha.component';
import { FichaNuevaComponent } from './components/ficha/ficha-nueva/ficha-nueva.component';
import { ClienteNuevoComponent } from './components/cliente/cliente-nuevo/cliente-nuevo.component';
import { ClienteDetalleComponent } from './components/cliente/cliente-detalle/cliente-detalle.component';
import { FichaDetalleComponent } from './components/ficha/ficha-detalle/ficha-detalle.component';
import { PagoNuevoComponent } from './components/pago/pago-nuevo/pago-nuevo.component';
import { ReservaDetalleComponent } from './components/reserva/reserva-detalle/reserva-detalle.component';
import { PagoListaComponent } from './components/pago/pago-lista/pago-lista.component';


export const ROUTES: Routes = [

    {path:'inicio', component:HomeComponent},
    {path:'reserva', component:ReservaComponent,canActivate:[AuthGuardService]},
    {path:'reserva/:fecha', component:ReservaComponent,canActivate:[AuthGuardService]},  
    {path:'nueva-reserva', component:ReservaNuevaComponent,canActivate:[AuthGuardService]},
    {path:'detalle-reserva/:id', component:ReservaDetalleComponent,canActivate:[AuthGuardService]},
    {path:'cliente', component:ClienteComponent,canActivate:[AuthGuardService]},
    {path:'nuevo-cliente', component:ClienteNuevoComponent,canActivate:[AuthGuardService]},
    {path:'detalle-cliente/:id', component:ClienteDetalleComponent,canActivate:[AuthGuardService]},
    {path:'ficha/:id', component:FichaComponent,canActivate:[AuthGuardService]},
    {path:'nueva-ficha', component:FichaNuevaComponent,canActivate:[AuthGuardService]},
    {path:'detalle-ficha/:id', component:FichaDetalleComponent,canActivate:[AuthGuardService]},
    {path:'nuevo-pago', component:PagoNuevoComponent,canActivate:[AuthGuardService]},
    {path:'pagos/:id', component:PagoListaComponent,canActivate:[AuthGuardService]},
    
   
    {path:'', pathMatch:'full', redirectTo:'inicio'},
    {path:'**', pathMatch:'full', redirectTo:'inicio'}

];