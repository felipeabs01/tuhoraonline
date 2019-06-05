import { Component, OnInit } from '@angular/core';
import { Horario } from '../../../models/horario.module';
import { ClienteService } from '../../../services/cliente.service';


import {FormControl} from '@angular/forms';
import {Observable, Subscription} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { ReservaService } from '../../../services/reserva.service';
import { Reserva } from '../../../models/reserva.module';
import { PersonaG } from '../../../models/persona.module';
import { Router } from '@angular/router';

import { ConfiguracionService } from '../../../services/configuracion.service';
import { PersonaService } from '../../../services/persona.service';
import { formatDate } from '@angular/common';


@Component({
  selector: 'app-reserva-nueva',
  templateUrl: './reserva-nueva.component.html'
})
export class ReservaNuevaComponent implements OnInit {
  hora : string;
  clientes:any[]=[];
  cliente:string;
  fecha: string;
  
  

  ngOnInit() {
   
  }

  
  constructor(private _clienteService:ClienteService,
    private _reservaService:ReservaService,
    private _router:Router,
    private _configuracionService:ConfiguracionService,
    private _personaService:PersonaService
  ) {
    this.hora = Horario.hora.toString();
    this.fecha = Horario.fecha;
    
   }


   buscarCliente(cliente){
    

    if(cliente !== "" ){
      this._clienteService.getClienteByNombre(cliente,this._configuracionService.configuracion.idEmpresa).subscribe((data:any)=>{
        this.clientes = data;
        console.log(this.clientes);
      });
  

    }
  
   }

   tomarHora(cliente)
   {
      console.log(cliente);
      console.log(Horario.fecha);
      console.log(Horario.hora);

      const reserva = new Reserva;
      
      reserva.cliente = cliente.nombre;
      reserva.fecha = formatDate(Horario.fecha, 'yyyy-MM-dd','es');

      // reserva.fecha.setDate( reserva.fecha.getDate()+1 );

      reserva.activo = true;
      reserva.horaIni = Horario.hora;
      reserva.horaFin = 0;
      reserva.idCliente = cliente.idCliente;
      reserva.idPersona = this._personaService.persona.idPersona;
      reserva.persona = this._personaService.persona.nombre;

      console.log(reserva);
      const fecha = formatDate(reserva.fecha, 'yyyy-MM-dd','es');
      console.log(fecha);

      
     
      let as =   this._reservaService.AddReserva(reserva)
      
      Promise.all([as]).then(data =>{
        console.log(data);
        this._router.navigate(['/reserva',fecha]);
      })

         
     
      
      
      
      

   }

   
 
}
