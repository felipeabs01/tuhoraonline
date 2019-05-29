import { Component, OnInit } from '@angular/core';
import { Horario } from '../../../models/horario.module';
import { ClienteService } from '../../../services/cliente.service';


import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { ReservaService } from '../../../services/reserva.service';
import { Reserva } from '../../../models/reserva.module';
import { PersonaG } from '../../../models/persona.module';
import { Router } from '@angular/router';
import { ConfiguracionG, Configuracion } from '../../../models/configuracion.module';
import { ConfiguracionService } from '../../../services/configuracion.service';


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
    private _configuracionService:ConfiguracionService
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
      reserva.fecha = new Date(Horario.fecha);
      // reserva.fecha.setDate( reserva.fecha.getDate()+1 );

      reserva.activo = true;
      reserva.horaIni = Horario.hora;
      reserva.horaFin = 0;
      reserva.idCliente = cliente.idCliente;
      reserva.idPersona = PersonaG.idPersona;
      reserva.persona = PersonaG.nombre;

      console.log(reserva);

      const resp = this._reservaService.AddReserva(reserva);
      console.log(resp);
      this._router.navigate(['/reserva'])

   }

   
 
}
