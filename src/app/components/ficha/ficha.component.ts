import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { Cliente, ClienteG } from '../../models/cliente.module';
import { FichaService } from '../../services/ficha.service';
import { Ficha, FichaG } from '../../models/ficha.module';
import { Router, ActivatedRoute } from '@angular/router';


declare var $:any;

@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.component.html',
  styles: []
})
export class FichaComponent implements OnInit {

  cliente:Cliente;
  fichas : Ficha[]=[];
  ficha:Ficha;
  id:string;

  constructor(private _clienteService : ClienteService,
    private _fichaService : FichaService,
    private _router:Router,
    private _routerActivo:ActivatedRoute
    
  ) {
   
    
// Tomar id por url
this._routerActivo.params.subscribe(params=>{
  if(params['id']){
    console.log(params['id']); 
    this._fichaService.getFichaPagadaByIdCliente(params['id']).subscribe((data:Ficha[])=>{
      console.log(data);
      this.fichas = data;
      });
  }else{
    this.cliente = this._clienteService.getClienteByClienteG();
    console.log(this.cliente);
    this._fichaService.getFichaPagadaByIdCliente(this.cliente.idCliente).subscribe((data:Ficha[])=>{
    console.log(data);
    this.fichas = data;
    });
  }
  
});


  



   }

  ngOnInit() {
  }


  verDetalle(ficha:Ficha){
    console.log(ficha.idFicha);
    this._fichaService.asignarFichaG(ficha);
    this._router.navigate(['detalle-ficha',ficha.idFicha])

  }


  fichaNueva(){
    FichaG.idFicha = 0;
    this._router.navigate(['nueva-ficha'])
  }

  editarFicha(ficha:Ficha){
    console.log(ficha);
    this._fichaService.asignarFichaG(ficha);
    this._router.navigate(['nueva-ficha'])
  }

}
