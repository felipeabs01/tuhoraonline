import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PagoService } from '../../../services/pago.service';
import { Pago } from '../../../models/pago.module';
import { ClienteG } from '../../../models/cliente.module';


@Component({
  selector: 'app-pago-lista',
  templateUrl: './pago-lista.component.html'
})
export class PagoListaComponent implements OnInit {

  pagos:Pago[]=[];
  cliente=0;

  constructor(
    private _routerActivo:ActivatedRoute,
    private _pagoService:PagoService
  ) { 

    this.cliente = ClienteG.idCliente;

    this._routerActivo.params.subscribe(params=>{
      if(params['id']){
        console.log(params['id']);
        this._pagoService.getPagoByCliente(params['id'])
        .subscribe( (data:Pago[]) =>{
          console.log(data);
          this.pagos = data;

        });
        
      }
      
    });

  }

  ngOnInit() {
  }

}
