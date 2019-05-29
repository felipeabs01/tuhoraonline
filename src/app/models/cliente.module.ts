import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class Cliente {

  idCliente : number;
  idEmpresa: number;
  nombre : string;
  fechaNac : Date;
  fono : number;
  email : string;
  activo : boolean;
  contrasena : string;
 }

 export class ClienteG {

  static idCliente : number;
  static idEmpresa: number;
  static nombre : string;
  static fechaNac : Date;
  static fono : number;
  static email : string;
  static activo : boolean;
  static contrasena : string;
 }
