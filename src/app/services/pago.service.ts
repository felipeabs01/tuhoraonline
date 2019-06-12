import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment.prod';
import { Pago } from '../models/pago.module';


@Injectable({
  providedIn: 'root'
})
export class PagoService {
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


  getPagoByFicha(idficha:number){
    return this.getQuery(`pago/filtro/ficha/${idficha}`);
  }


  getPagoByCliente(idcliente:number){
    return this.getQuery(`pago/filtro/cliente/${idcliente}`);
  }


  
  AddPago(body: Pago){
    const url = `${this.url}pago`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    var promise = new Promise((resolve) => {
      console.log("Async Work Complete");
      this.http.post<Pago>(url,body,{headers}).pipe(
        map(response => response)).subscribe((data:Pago) => {
         
          
            resolve("agregado"+body);
          
        });
  
  });
  return promise;
    // return this.http.post<Ficha>(url,body,{headers}).pipe(
    //   map(response => response)).subscribe(data => console.log(data));

  }

  UpdatePago(id:string ,body: Object){
    const url = `${this.url}pago/${id}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    var promise = new Promise((resolve) => {
      console.log("Async Work Complete");
      this.http.put(url,body,{headers}).pipe(
        map(response => response)).subscribe((data:Pago) => {
         
          
            resolve("actualizado"+body);
          
        });
  
  });
  return promise;


    // return this.http.put(url,body,{headers}).pipe(
    //   map(response => response)).subscribe(data => console.log(data));
  }


}
