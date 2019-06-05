import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../../services/cliente.service';
import { Cliente } from '../../../models/cliente.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-detalle',
  templateUrl: './cliente-detalle.component.html',
  styles: []
})
export class ClienteDetalleComponent implements OnInit {

  cliente:Cliente;

  constructor(private _clienteService : ClienteService,
  private _router:Router) {
    this.cliente = _clienteService.getClienteByClienteG();


   }

  ngOnInit() {
  }

  editarCliente(cliente){
    this._clienteService.asignarClienteG(cliente);
    this.cliente = cliente;
    console.log(this.cliente);
    this._router.navigate(['/nuevo-cliente'])
 }


}
