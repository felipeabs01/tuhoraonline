import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class Persona {

  idPersona : number;
  idTipoPersona: number;
  idProfesion : number;
  idEmpresa : number;
  nombre : string;
  email : string;
  contrasena : string;
  fechaNac : Date;
  fono : number;
  activo : boolean;
 

 }

 export class PersonaG {

   static idPersona : number;
    idTipoPersona: number;
    idProfesion : number;
    idEmpresa : number;
    static nombre : string;
    static email : string;
    contrasena : string;
    fechaNac : Date;
    fono : number;
    activo : boolean;
   
  
   }
