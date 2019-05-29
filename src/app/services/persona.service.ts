import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Reserva } from '../models/reserva.module';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
import { Persona } from '../models/persona.module';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  url : string;
  persona : Persona;


  constructor(
    private http:HttpClient
  ) { 
    this.url = environment.apiEndpoint;
  }

  asignarPersona(per :Persona){
    this.persona = per;
  }

  getQuery(query:string){
    const url = environment.apiEndpoint+`${query}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.get(url, {headers});
  }

  getpersonas(){
    return this.getQuery(`persona`);
  }

  getpersonaBycorreo(correo:string){
    return this.getQuery(`persona/filtro/correo/${correo}`);
  }

  
  AddPersona(body: Reserva){
    const url = `${this.url}persona`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    console.log(body);
    return this.http.post<Reserva>(url,body,{headers}).pipe(
      map(response => response)).subscribe(data => console.log(data));

  }

  UpdateProducto(id:string ,body: Object){
    const url = `${this.url}persona/${id}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    console.log(url);
    console.log(id);
    console.log(body);
    return this.http.put(url,body,{headers}).pipe(
      map(response => response)).subscribe(data => console.log(data));;


  }
}
