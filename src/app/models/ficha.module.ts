import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class Ficha {

  idFicha : number;
  idCliente: number;
  idPersona: number;
  nombre : string;
  detalle : string;
  fecha : string;
  valor : number;
  sesion : number;
  sesiones : number;
  activo : boolean;
 }




 export class FichaG {

  static idFicha : number;
  static idCliente: number;
  static idPersona: number;
  static nombre : string;
  static detalle : string;
  static fecha : string;
  static valor : number;
  static sesion : number;
  static sesiones : number;
  static activo : boolean;
 }




   