import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Reserva } from '../models/reserva.module';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class ReservaService {
url : string;

headers:HttpHeaders;

  constructor(
    private http:HttpClient
  ) { 
    this.url = environment.apiEndpoint;
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }

  getQuery(query:string){
    const url = environment.apiEndpoint+`${query}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.get(url, {headers});
  }

  getReservasByEmpresaFecha(idempresa:number, fecha:string){
    return this.getQuery(`reserva/filtro/empresa/${idempresa}/fecha/${fecha}`);
  }


  
   AddReserva(body: Reserva){
    const url = `${this.url}reserva`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    var promise = new Promise((resolve) => {
      setTimeout(() => {
        console.log("Async Work Complete");
        this.http.post<Reserva>(url,body,{headers}).pipe(
          map(response => response)).subscribe((data:Reserva) => {
            console.log(data);
            if(data){
              resolve("agregado"+data);
            }
          });
      }, 1);
    });
    return promise;
    // return  this.http.post<Reserva>(url,body,{headers}).pipe(
    //   map(response => response)).subscribe(data => console.log(data));
  }

  UpdateReserva(id:string ,body: Object){
    const url = `${this.url}reserva/${id}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    // return this.http.put(url,body,{headers}).pipe(
    //   map(response => response)).subscribe(data => console.log(data));;

      var promise = new Promise((resolve) => {
        setTimeout(() => {
          console.log("Async Work Complete");
          this.http.put(url,body,{headers}).pipe(
            map(response => response)).subscribe((data:Reserva) => {
              console.log("Actualizado");
              
                resolve("actualizado"+body);
              
            });
        }, 1);
      });
      return promise;
      // return  this.http.post<Reserva>(url,body,{headers}).pipe(
      //   map(response => response)).subscribe(data => console.log(data));

  }


}
