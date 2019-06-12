import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class Pago {

  idPago : number;
  idBoleta: number;
  idTipoPago: number;
  fecha : string;
  monto : number;
  activo : boolean;
 }


