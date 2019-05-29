import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class Configuracion {

  idConfiguracion : number;
  idEmpresa: number;
  personaReserva : number;
  diaHorario : number;
  minTurno : number;
  diaApertura : string;
  horaApertura : number;
  horaCierre : number;
  horaCliente : boolean;
  valor : number;
  valorMensual: number;
  activo : boolean;

 }

 export class ConfiguracionG {

  static idConfiguracion : number;
  static idEmpresa: number;
  static personaReserva : number;
  static diaHorario : number;
  static minTurno : number;
  static diaApertura : string;
  static horaApertura : number;
  static horaCierre : number;
  static horaCliente : boolean;
  static valor : number;
  static valorMensual: number;
  static activo : boolean;

 }
