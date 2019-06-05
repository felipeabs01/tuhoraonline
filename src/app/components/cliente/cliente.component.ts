import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ClienteG, Cliente } from '../../models/cliente.module';
import { ConfiguracionG } from '../../models/configuracion.module';
import { ConfiguracionService } from '../../services/configuracion.service';

declare var $:any;

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styles: []
})
export class ClienteComponent implements OnInit {

  clientestr:string;
  cliente:Cliente;
  clientes: any[]=[];

  subscription: Subscription;

  constructor(
    private _clienteService : ClienteService,
    private _router:Router,
    private _configuracionService:ConfiguracionService
  ) { 

    
  }

  ngOnInit() {
  }

  buscarCliente(cliente){
    if(cliente !== "" ){
     
      this._clienteService.getClienteByNombre(cliente,this._configuracionService.configuracion.idEmpresa).subscribe((data:any)=>{
        this.clientes = data;
        console.log(this.clientes);
      });
    } 
   }

   verFicha(cliente:Cliente){
     this._clienteService.asignarClienteG(cliente);
     this.cliente = cliente;
      this._router.navigate(['/ficha/',cliente.idCliente])

   }
  

   detalleCliente(cliente){
     console.log(cliente);
    this._clienteService.asignarClienteG(cliente);
    this.cliente = cliente;
    console.log(this.cliente);
    this._router.navigate(['/detalle-cliente',cliente.idCliente])
 }

     nuevoCliente(){
       ClienteG.idCliente=0;
      this._router.navigate(['/nuevo-cliente'])
     }


 opcionesModal(cliente){

  this.cliente = cliente;

  $(document).ready(function(){
    $('.modal').modal();
  });

  // this._clienteService.asignarClienteG(cliente);
  

  

  
}










}
