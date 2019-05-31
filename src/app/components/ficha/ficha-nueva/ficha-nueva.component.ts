import { Component, OnInit } from '@angular/core';
import { ClienteG } from '../../../models/cliente.module';
import { FichaG, Ficha } from '../../../models/ficha.module';
import { formatDate } from '@angular/common';

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
  fecha : Date;
  valor : number = 0;
  activo : boolean = true;

  formattedDate:string = '';

 
  cliente = ClienteG;

  nueva : boolean = false;


  constructor() {

    this.formattedDate = formatDate(new Date(), 'yyyy-MM-dd','es');

    console.log(FichaG.idFicha);
    console.log(FichaG.nombre);
    if(FichaG.idFicha!=0){
      // this.nombre = FichaG.nombre;
      // this.detalle = FichaG.detalle;

      this.nombre = FichaG.nombre;
      this.detalle = FichaG.detalle;
      this.valor = FichaG.valor;
      this.fecha = FichaG.fecha;
      this.activo = FichaG.activo;
      this.formattedDate = FichaG.fecha.toString().slice(0,10);
    }else{
      this.nueva = true;
    }


   }

  ngOnInit() {
  }


  guardarFicha(){

    if(this.nueva == false){

      const ficha = new Ficha;

      console.log(this.activo);

      ficha.activo = true;

      console.log(ficha.activo);

      ficha.fecha = this.fecha;
      ficha.detalle = this.detalle;
      ficha.nombre = this.nombre;
      ficha.valor = this.valor;
  
      ficha.idCliente = FichaG.idCliente;
      ficha.idFicha = FichaG.idFicha;
      ficha.idPersona = FichaG.idPersona;
      ficha.sesion = FichaG.sesion;
      ficha.sesiones = FichaG.sesiones;
  
      console.log(ficha);
    }
    
    
  }

}
 