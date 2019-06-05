import { Component, OnInit } from '@angular/core';
import { ClienteG } from '../../../models/cliente.module';
import { FichaG, Ficha } from '../../../models/ficha.module';
import { formatDate } from '@angular/common';

import { PersonaService } from '../../../services/persona.service';
import { Router } from '@angular/router';
import { FichaService } from '../../../services/ficha.service';

@Component({
  selector: 'app-ficha-nueva',
  templateUrl: './ficha-nueva.component.html',
  styles: []
})
export class FichaNuevaComponent implements OnInit {

  // id_ficha int IDENTITY(1,1) NOT NULL,
  // id_cliente int not null,
  // id_persona int not null,
  // nombre varchar(200) NOT NULL,
  // detalle varchar(500),
  // fecha date not null,
  // valor int not null,
  // sesion int not null,
  // sesiones int not null,
  // activo bit NOT NULL,

  
  nombre:string = '';
  detalle:string = '';
  fecha : string;
  valor : number = 0;
  activo : boolean = true;

  formattedDate:string = '';

 
  cliente = ClienteG;

  nueva : boolean = false;


  constructor(private _router:Router,
  private _personaService:PersonaService,
  private _fichaService:FichaService
) {

    this.formattedDate = formatDate(new Date(), 'yyyy-MM-dd','es');

    console.log(FichaG.idFicha);
    console.log(FichaG.nombre);
    if(FichaG.idFicha!=0){
      // this.nombre = FichaG.nombre;
      // this.detalle = FichaG.detalle;

      this.nombre = FichaG.nombre;
      this.detalle = FichaG.detalle;
      this.valor = FichaG.valor;
      this.fecha = FichaG.fecha.toString().slice(0,10);
      this.activo = FichaG.activo;
      this.formattedDate = FichaG.fecha.toString().slice(0,10);
    }else{
      this.nueva = true;
      
      this.fecha = (this.formattedDate.slice(0,10));
      console.log(this.fecha);
    }


   }

  ngOnInit() {
  }


  guardarFicha(){

    if(this.nueva == false){

      const ficha = new Ficha;
      ficha.activo = true;
      ficha.fecha = this.fecha;
      ficha.detalle = this.detalle;
      ficha.nombre = this.nombre;
      ficha.valor = this.valor;
  
      ficha.idFicha = FichaG.idFicha;
      ficha.idCliente = FichaG.idCliente;
      ficha.idPersona = FichaG.idPersona;
      ficha.sesion = FichaG.sesion;
      ficha.sesiones = FichaG.sesiones;
      console.log(ficha);
      this._fichaService.UpdateFicha(ficha.idFicha.toString(),ficha);
      this._router.navigate(['/ficha',FichaG.idCliente]);

    }else{

      const ficha = new Ficha;

      ficha.activo = true;
      ficha.fecha = this.fecha;
      ficha.detalle = this.detalle;
      ficha.nombre = this.nombre;
      ficha.valor = this.valor;
  
      ficha.idCliente = ClienteG.idCliente;
      // ficha.idFicha = FichaG.idFicha;
      ficha.idPersona = this._personaService.persona.idPersona;
      ficha.sesion = 0;
      ficha.sesiones = 0;
      console.log(ficha);
      this._fichaService.AddFicha(ficha);
      this._router.navigate(['/ficha', ClienteG.idCliente]);

      

      //AGREGAR BOLETA

    }
    
    
    
  }

}
 