import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { Cliente, ClienteG } from '../../models/cliente.module';
import { FichaService } from '../../services/ficha.service';
import { Ficha, FichaG } from '../../models/ficha.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.component.html',
  styles: []
})
export class FichaComponent implements OnInit {

  cliente:Cliente;
  fichas : Ficha[]=[];

  constructor(private _clienteService : ClienteService,
    private _fichaService : FichaService,
    private _router:Router
  ) {
    
    this.cliente = this._clienteService.getClienteByClienteG();
    console.log(this.cliente);
    this._fichaService.getFichaByIdCliente(this.cliente.idCliente).subscribe((data:Ficha[])=>{
      console.log(data);
      this.fichas = data;
    });

   }

  ngOnInit() {
  }

  fichaNueva(){
    FichaG.idFicha = 0;
    this._router.navigate(['nueva-ficha'])
  }

  editarFicha(ficha:Ficha){

    this._fichaService.asignarFichaG(ficha);
    this._router.navigate(['nueva-ficha'])
  }

}
