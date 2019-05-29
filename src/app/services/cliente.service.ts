import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Reserva } from '../models/reserva.module';
import { map } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';
import { Cliente, ClienteG } from '../models/cliente.module';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  url : string;
  // private subjectCliente = new Subject<Cliente>();


  constructor(
    private http:HttpClient
  ) { 
    // this.url = 'http://localhost:44359/api/';
    this.url = environment.apiEndpoint;
    // this.url = 'http://tuhoraonline.com:81/api/';
  }

//   getClienteSubject(): Observable<Cliente> {
//     return this.subjectCliente.asObservable();
// }

// assignSubject(cliente){
//   this.subjectCliente.next(cliente);
// }

  asignarClienteG(cliente:Cliente){
    ClienteG.activo = cliente.activo;
    ClienteG.contrasena = cliente.contrasena;
    ClienteG.email = cliente.email;
    ClienteG.fechaNac = cliente.fechaNac;
    ClienteG.fono = cliente.fono;
    ClienteG.idCliente = cliente.idCliente;
    ClienteG.idEmpresa = cliente.idEmpresa;
    ClienteG.nombre = cliente.nombre;

  }

  getClienteByClienteG(){
    const cliente = new Cliente;
    if(ClienteG.idCliente != null && ClienteG.idCliente != 0)
    {
        cliente.activo = ClienteG.activo;
        cliente.contrasena = ClienteG.contrasena;
        cliente.email = ClienteG.email;
        cliente.fechaNac = ClienteG.fechaNac;
        cliente.fono = ClienteG.fono;
        cliente.idCliente = ClienteG.idCliente;
        cliente.idEmpresa = ClienteG.idEmpresa;
        cliente.nombre = ClienteG.nombre;

        return cliente;
    }

  }


  getQuery(query:string){
    // const url = `https://localhost:44359/api/${query}`;
    const url = environment.apiEndpoint+`${query}`;
    console.log(url);
    // const url = `http://tuhoraonline.com:81/api/${query}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.get(url, {headers});
  }

  getClientes(){
    return this.getQuery(`cliente`);
  }

  getClienteByNombre(nombre:string,id:number){
    return this.getQuery(`cliente/filtro/nombre/${nombre}/empresa/${id}`);
  }

  
  AddCliente(body: Reserva){
    const url = `${this.url}cliente`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    console.log(body);
    return this.http.post<Reserva>(url,body,{headers}).pipe(
      map(response => response)).subscribe(data => console.log(data));

  }

  UpdateProducto(id:string ,body: Object){
    const url = `${this.url}cliente/${id}`;
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
