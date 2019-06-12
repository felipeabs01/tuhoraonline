import { Component, OnInit } from '@angular/core';
import { ClienteG } from '../../../models/cliente.module';
import { FichaG, Ficha } from '../../../models/ficha.module';
import { formatDate } from '@angular/common';

import { PersonaService } from '../../../services/persona.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FichaService } from '../../../services/ficha.service';
import { BoletaService } from '../../../services/boleta.service';
import { Boleta } from '../../../models/boleta.module';

@Component({
  selector: 'app-ficha-nueva',
  templateUrl: './ficha-nueva.component.html',
  styles: []
})
export class FichaNuevaComponent implements OnInit {


  ficha: Ficha;
  ultimaFicha:Ficha;
  
  // nombre:string = '';
  // detalle:string = '';
  // fecha : string;
  // valor : number = 0;
  // activo : boolean = true;

  formattedDate:string = '';
  id:string;
 
  cliente = ClienteG;

  nueva : boolean = false;


  constructor(private _router:Router,
  private _personaService:PersonaService,
  private _fichaService:FichaService,
  private _boletaService:BoletaService
) {

  
  this.id=ClienteG.idCliente.toString();

    this.formattedDate = formatDate(new Date(), 'dd-MM-yyyy','es');

    console.log(FichaG.idFicha);
    console.log(FichaG.nombre);
    if(FichaG.idFicha!=0){
      
      // this.nombre = FichaG.nombre;
      // this.detalle = FichaG.detalle;
      this.ficha = this._fichaService.getFichaG();
      console.log(this.ficha );
      // this.nombre = FichaG.nombre;
      // this.detalle = FichaG.detalle;
      // this.valor = FichaG.valor;
      this.ficha.fecha =  this.ficha.fecha.toString().slice(0,10);
      // this.activo = FichaG.activo;
      this.formattedDate =  this.ficha.fecha.toString().slice(0,10);
    }else{
      this.nueva = true;

      this.ficha = new Ficha;

      this.ficha.fecha = formatDate(new Date(), 'dd-MM-yyyy','es').slice(0,10);
      // this.fecha = (this.formattedDate.slice(0,10));
      console.log(this.formattedDate);
    }
    console.log(this.ficha.fecha);

   }

  ngOnInit() {
  }


  guardarFicha(){

    if(this.nueva == false){
      console.log(this.ficha);

      
      
      let as = this._fichaService.UpdateFicha(this.ficha.idFicha.toString(),this.ficha);
      
      Promise.all([as]).then(data =>{
        console.log(data);

        //modificar monto si cambie en ficha
        this._router.navigate(['/ficha',FichaG.idCliente]);
     
      })

    }else{

      const ficha = new Ficha;
      

      ficha.activo = true;
      ficha.fecha = this.ficha.fecha;
      ficha.detalle = this.ficha.detalle;
      ficha.nombre = this.ficha.nombre;
      ficha.valor = this.ficha.valor;
  
      ficha.idCliente = ClienteG.idCliente;
      // ficha.idFicha = FichaG.idFicha;
      ficha.idPersona = this._personaService.persona.idPersona;
      ficha.sesion = 0;
      ficha.sesiones = 0;
      console.log(ficha);

      let as = this._fichaService.AddFicha(ficha);
      
      Promise.all([as]).then(data =>{
        console.log(data);

        this._fichaService.getUltimaFichaByIdCliente(ClienteG.idCliente)
        .subscribe((data:Ficha)=>{
            console.log(data);
            console.log(data.idFicha);
            this.ultimaFicha = data;


            console.log(this.ultimaFicha.idFicha);
            if(this.ultimaFicha.idFicha != 0){
              const bol = new Boleta;
              bol.activo = true;
              bol.fecha = this.ultimaFicha.fecha.slice(0,10);
              bol.idFicha = this.ultimaFicha.idFicha;
              bol.monto = this.ultimaFicha.valor;
              bol.pagada = false;
    
              console.log(bol);
             let as = this._boletaService.AddBoleta(bol);
              Promise.all([as]).then(data =>{
                console.log("Boleta Agregada",data);
                this._router.navigate(['/ficha',ClienteG.idCliente]);
              });
            }

        });

      
       

        
      })

      //AGREGAR BOLETA

    }
    
    
    
  }

}
 