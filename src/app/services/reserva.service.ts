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

  getReservasByEmpresaFecha(idempresa:number, fecha:string){
    return this.getQuery(`reserva/filtro/empresa/${idempresa}/fecha/${fecha}`);
  }


  
  AddReserva(body: Reserva){
    const url = `${this.url}reserva`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    console.log(body);
    return this.http.post<Reserva>(url,body,{headers}).pipe(
      map(response => response)).subscribe(data => console.log(data));

  }

  UpdateReserva(id:string ,body: Object){
    const url = `${this.url}reserva/${id}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });


    return this.http.put(url,body,{headers}).pipe(
      map(response => response)).subscribe(data => console.log(data));;


  }


}
