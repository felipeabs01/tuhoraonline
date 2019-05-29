import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class Reserva {

  idReserva : number;
  idCliente: number;
  idPersona : number;
  fecha : Date;
  horaIni : number;
  horaFin : number;
  activo : boolean;
  cliente : string;
  persona : string;
 

 }
