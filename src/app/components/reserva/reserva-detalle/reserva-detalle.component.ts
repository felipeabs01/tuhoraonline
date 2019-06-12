import { Component, OnInit } from '@angular/core';
import { ReservaService } from '../../../services/reserva.service';
import { Reserva } from '../../../models/reserva.module';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-reserva-detalle',
  templateUrl: './reserva-detalle.component.html',
  styles: []
})
export class ReservaDetalleComponent implements OnInit {

  reserva:Reserva;

  constructor(private _reservaService:ReservaService,
  private _router:Router) { 

    this.reserva = this._reservaService.getres();
    
    if(!this.reserva)
      this._router.navigate(['/inicio']);


    console.log(this.reserva);

  }

  ngOnInit() {
  }

  cancelar(){
    const fecha = formatDate(this.reserva.fecha, 'yyyy-MM-dd','es');
    this._router.navigate(['/reserva',fecha]);
  }

  eliminarReserva(reserva)
  {
   

    console.log('eliminar reserva',reserva);  
    reserva.activo = false;

    let as = this._reservaService.UpdateReserva(reserva.idReserva,reserva);
      
    Promise.all([as]).then(data =>{
      console.log(data);
      const fecha = formatDate(this.reserva.fecha, 'yyyy-MM-dd','es');
      this._router.navigate(['/reserva',fecha]);
    })

  }

}
