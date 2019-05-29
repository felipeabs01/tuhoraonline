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
  }
  
  AddFicha(body: Ficha){
    const url = `${this.url}ficha`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    console.log(body);
    return this.http.post<Ficha>(url,body,{headers}).pipe(
      map(response => response)).subscribe(data => console.log(data));

  }

  UpdateFicha(id:string ,body: Object){
    const url = `${this.url}ficha/${id}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });


    return this.http.put(url,body,{headers}).pipe(
      map(response => response)).subscribe(data => console.log(data));;


  }


}
