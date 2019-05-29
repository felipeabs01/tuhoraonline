import { Component, OnInit } from '@angular/core';
import { ClienteG } from '../../../models/cliente.module';
import { FichaG, Ficha } from '../../../models/ficha.module';

@Component({
  selector: 'app-ficha-nueva',
  templateUrl: './ficha-nueva.component.html',
  styles: []
})
export class FichaNuevaComponent implements OnInit {

  nombre:string = '';
  detalle:string = '';
  cliente = ClienteG;

  ficha:FichaG;

  constructor() {

    console.log(FichaG.idFicha);
    console.log(FichaG.nombre);
    if(FichaG.idFicha!=0){
      this.nombre = FichaG.nombre;
      this.detalle = FichaG.detalle;
    }

   }

  ngOnInit() {
  }

}
 