import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment.prod';
import { Boleta } from '../models/boleta.module';


@Injectable({
  providedIn: 'root'
})
export class BoletaService {
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

  getBoletaByFicha(id:number){
    return this.getQuery(`boleta/filtro/ficha/${id}`);
  }

  
  AddBoleta(body: Boleta){
    const url = `${this.url}boleta`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    var promise = new Promise((resolve) => {
      console.log("Async Work Complete");
      this.http.post<Boleta>(url,body,{headers}).pipe(
        map(response => response)).subscribe((data:Boleta) => {
         
          
            resolve("agregado"+body);
          
        });
  
  });
  return promise;
    // return this.http.post<Ficha>(url,body,{headers}).pipe(
    //   map(response => response)).subscribe(data => console.log(data));

  }

  UpdateBoleta(id:string ,body: Object){
    const url = `${this.url}boleta/${id}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    var promise = new Promise((resolve) => {
      console.log("Async Work Complete");
      this.http.put(url,body,{headers}).pipe(
        map(response => response)).subscribe((data:Boleta) => {
         
          
            resolve("actualizado"+body);
          
        });
  
  });
  return promise;


    // return this.http.put(url,body,{headers}).pipe(
    //   map(response => response)).subscribe(data => console.log(data));
  }


}
