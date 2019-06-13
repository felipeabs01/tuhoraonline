import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Configuracion, ConfiguracionG } from '../models/configuracion.module';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ConfiguracionService {

  configuracion:Configuracion;

  constructor(
    private http:HttpClient
  ) { }

  getQuery(query:string){
    const url = environment.apiEndpoint+`${query}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.get(url, {headers});
  }

  getConfiguracionByCorreo( correo:string){
    return this.getQuery(`configuracion/filtro/correo/${correo}`);
  }


  getConfiguracion(){

    var promise = new Promise((resolve) => {
      console.log("Async Work Complete");
      this.getConfiguracionByCorreo(localStorage.getItem('name')).subscribe( (data:Configuracion)=>{
        
        this.configuracion = data[0];
         
         console.log(this.configuracion);
         resolve("agregado"+ this.configuracion);
      });
    });
    return promise;

    // console.log(this.configuracion);
   
    //   this.getConfiguracionByCorreo(localStorage.getItem('name')).subscribe( (data:Configuracion)=>{
        
    //     this.configuracion = data[0];
         
    //      console.log(this.configuracion);
    //   })
  }

 
  asignarConfiguracionG(configuracion:Configuracion){
      ConfiguracionG.activo = configuracion.activo;
      ConfiguracionG.diaApertura = configuracion.diaApertura;
      ConfiguracionG.diaHorario = configuracion.diaHorario;
      ConfiguracionG.horaApertura = configuracion.horaApertura;
      ConfiguracionG.horaCierre = configuracion.horaCierre;
      ConfiguracionG.horaCliente = configuracion.horaCliente;
      ConfiguracionG.idConfiguracion = configuracion.idConfiguracion;
      ConfiguracionG.idEmpresa = configuracion.idEmpresa;
      ConfiguracionG.minTurno = configuracion.minTurno;
      ConfiguracionG.personaReserva = configuracion.personaReserva;
      ConfiguracionG.valor = configuracion.valor;
      ConfiguracionG.valorMensual = configuracion.valorMensual;
  }

  
}
