import { Component, OnInit, Input } from '@angular/core';
import { Pago } from '../../models/pago.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styles: []
})
export class PagoComponent implements OnInit {

  @Input() items:any[]=[];

  constructor(private _router:Router) { }

  ngOnInit() {
  }

  nuevoPago(){
    this._router.navigate(['nuevo-pago']);
  }
}
