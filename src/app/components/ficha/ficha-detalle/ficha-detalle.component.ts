import { Component, OnInit, Input } from '@angular/core';
import { Ficha } from '../../../models/ficha.module';
import { FichaService } from '../../../services/ficha.service';
import { ClienteG } from '../../../models/cliente.module';
import { Router } from '@angular/router';
import { PagoService } from '../../../services/pago.service';
import { Pago } from '../../../models/pago.module';

@Component({
  selector: 'app-ficha-detalle',
  templateUrl: './ficha-detalle.component.html',
  styles: []
})
export class FichaDetalleComponent implements OnInit {
  ficha:Ficha;
  cliente:string;
  id:string;


  pagos:Pago[]=[];

  constructor(private _fichaService:FichaService,
    private _router:Router,
    private _pagoService:PagoService
  ) {

    this.ficha = this._fichaService.getFichaG();
    this.cliente = ClienteG.nombre;
    this.id = this.ficha.idCliente.toString();
    this._pagoService.getPagoByFicha(this.ficha.idFicha).subscribe((data:Pago[])=>{
        console.log(data);
        this.pagos=data;
    });

   }

  ngOnInit() {
  }

  editarFicha(ficha:Ficha){
    console.log(ficha);
    this._fichaService.asignarFichaG(ficha);
    this._router.navigate(['nueva-ficha'])
  }

}
