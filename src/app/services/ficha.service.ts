import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Ficha, FichaG } from '../models/ficha.module';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class FichaService {
url : string;



  constructor(
    private http:HttpClient
  ) { 
    this.url = environment.apiEndpoint;
  }

  getQuery(query:string){
    const url = environment.apiEndpoint+`${query}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.get(url, {headers});
  }

  getFichaByIdCliente(idcliente:number){
    return this.getQuery(`ficha/filtro/cliente/${idcliente}`);
  }

  getFichaPagadaByIdCliente(idcliente:number){
    return this.getQuery(`ficha/filtro/pagada/cliente/${idcliente}`);
  }

  getUltimaFichaByIdCliente(idcliente:number){
    return this.getQuery(`ficha/filtro/ultima/cliente/${idcliente}`);
  }


  asignarFichaG(ficha:Ficha){
     FichaG.activo = ficha.activo;
     FichaG.detalle = ficha.detalle;
     FichaG.fecha = ficha.fecha;
     FichaG.idCliente = ficha.idCliente;
     FichaG.idFicha = ficha.idFicha;
     FichaG.idPersona = ficha.idPersona;
     FichaG.nombre = ficha.nombre;
     FichaG.sesion = ficha.sesion;
     FichaG.sesiones = ficha.sesiones;
     FichaG.valor = ficha.valor;
     FichaG.pagada = ficha.pagada;
  }

  getFichaG(){

    const ficha = new Ficha;

    ficha.activo = FichaG.activo;
    ficha.pagada = FichaG.pagada;
    ficha.detalle = FichaG.detalle;
    ficha.fecha = FichaG.fecha;
    ficha.idCliente = FichaG.idCliente;
    ficha.idFicha = FichaG.idFicha;
    ficha.idPersona = FichaG.idPersona;
    ficha.nombre = FichaG.nombre;
    ficha.sesion = FichaG.sesion;
    ficha.sesiones = FichaG.sesiones;
    ficha.valor = FichaG.valor;

    return ficha;
 }
  
  AddFicha(body: Ficha){
    const url = `${this.url}ficha`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    var promise = new Promise((resolve) => {
      console.log("Async Work Complete");
      this.http.post<Ficha>(url,body,{headers}).pipe(
        map(response => response)).subscribe((data:Ficha) => {
         
          
            resolve("agregado"+body);
          
        });
  
  });
  return promise;
    // return this.http.post<Ficha>(url,body,{headers}).pipe(
    //   map(response => response)).subscribe(data => console.log(data));

  }

  UpdateFicha(id:string ,body: Object){
    const url = `${this.url}ficha/${id}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    var promise = new Promise((resolve) => {
      console.log("Async Work Complete");
      this.http.put(url,body,{headers}).pipe(
        map(response => response)).subscribe((data:Ficha) => {
         
          
            resolve("actualizado"+body);
          
        });
  
  });
  return promise;


    // return this.http.put(url,body,{headers}).pipe(
    //   map(response => response)).subscribe(data => console.log(data));
  }


}
