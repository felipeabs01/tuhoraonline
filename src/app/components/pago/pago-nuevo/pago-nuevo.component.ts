import { Component, OnInit } from '@angular/core';
import { Pago } from '../../../models/pago.module';
import { formatDate } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FichaService } from '../../../services/ficha.service';
import { Ficha } from '../../../models/ficha.module';
import { BoletaService } from '../../../services/boleta.service';
import { Boleta } from '../../../models/boleta.module';
import { ActivatedRoute, Router } from '@angular/router';
import { PagoService } from '../../../services/pago.service';

@Component({
  selector: 'app-pago-nuevo',
  templateUrl: './pago-nuevo.component.html',
  styles: []
})
export class PagoNuevoComponent implements OnInit {
  pago:Pago;
  boleta:Boleta;
  submitted = false;
  registerForm: FormGroup;
  saldo=0;
  pagado=0;
  ficha:Ficha;
  pagos:Pago[]=[];
  
 
  constructor(private formBuilder: FormBuilder,
  private _fichaService:FichaService,
private _boletaService : BoletaService,
private _router:Router,
private _pagoService:PagoService) { 
    //OBTENEr boleta de ficha
    this.ficha = this._fichaService.getFichaG();
    console.log(this.ficha);

    this._boletaService.getBoletaByFicha(this.ficha.idFicha)
    .subscribe((data:Boleta)=>{
        this.boleta = data[0];
        console.log(data[0]);


        this._pagoService.getPagoByFicha(this.ficha.idFicha).subscribe((data:Pago[])=>{
          console.log(data);
          this.pagos=data;
    
          this.pagos.forEach(element => {
            this.pagado =  element.monto + this.pagado;
          });
      });

      console.log(this.boleta.monto);
      this.saldo = this.boleta.monto - this.pagado;
          
      console.log(this.boleta.monto);
      console.log(this.pagado);
      console.log(this.saldo);

    })


   

    //setear saldo
    this.pago = new Pago;
    // this.pago.fecha = formatDate(new Date(), 'dd-MM-yyyy','es').slice(0,10);
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      monto: ['', [Validators.required,Validators.pattern('[0-9]*')] ],
      fecha: ['',  Validators.required],
      pago: ['',Validators.required]
      
      // email: ['', [Validators.required, Validators.email]],
      // password: ['', [Validators.required, Validators.minLength(6)]],
      // confirmPassword: ['', Validators.required]
  });

  }

 get f() { return this.registerForm.controls; }

 onSubmit() {
  this.submitted = true;
  console.log(this.registerForm.value);
  // stop here if form is invalid
  if (this.registerForm.invalid ||this.registerForm.value.pago == '') {
      return;
  }
  const pago = new Pago;
  
  console.log(this.boleta);

  pago.activo = true;
  pago.fecha = this.registerForm.value.fecha;
  pago.idBoleta = this.boleta.idBoletaCliente;
  pago.idTipoPago = this.registerForm.value.pago;
  pago.monto = this.registerForm.value.monto;

  console.log(pago);


  if(this.saldo == 0){
     console.log("actualizar boleta a pagada");

     let as =   this._pagoService.AddPago(pago)
      
     Promise.all([as]).then(data =>{
       console.log(data);
      this.boleta.pagada = true;
      console.log(this.boleta);
      
      let asd =   this._boletaService
      .UpdateBoleta(this.boleta.idBoletaCliente.toString(),this.boleta);

      Promise.all([asd]).then(data =>{
        console.log(data);
        this._router.navigate(['detalle-ficha',this.ficha.idFicha]);
      });
     })


    
  }
  if(this.saldo < 0){
    console.log("monto superior a saldo");
 }

 if(this.saldo > 0){
  console.log("falta por pagar");
  let as =   this._pagoService.AddPago(pago)
      
     Promise.all([as]).then(data =>{
       console.log(data);
      this._router.navigate(['detalle-ficha',this.ficha.idFicha]);
     })
  
}


  




  // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
}

  
}
