import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class Horario {
 
  idReserva:number;
  static hora : number;
  nombre : string;
  static fecha : string;

 }