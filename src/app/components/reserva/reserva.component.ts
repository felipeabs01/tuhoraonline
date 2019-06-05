import { Component, OnInit ,OnDestroy } from '@angular/core';
import { ReservaService } from '../../services/reserva.service';
import { formatDate } from '@angular/common';
import { ConfiguracionService } from '../../services/configuracion.service';
import { Configuracion, ConfiguracionG } from '../../models/configuracion.module';
import { Reserva } from '../../models/reserva.module';
import { Horario } from '../../models/horario.module';
import { Router, ActivatedRoute } from '@angular/router';
import { PersonaService } from '../../services/persona.service';

import {  Subject, Subscription } from 'rxjs';
import { PersonaG } from '../../models/persona.module';


declare var $:any;

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styles: []
})
export class ReservaComponent implements OnInit {

  private subject = new Subject<any>();
  subscription: Subscription;
  configuracion:Configuracion;
  calendario= null;
  formattedDate = '';
  loading:boolean=true;
 
  reserva : Reserva;
  
  // modalRef: BsModalRef;
  salto = 0;
 
  hora:string;
  horario: Array<Reserva> = [];

  resultado = 0;
  reservas: any[]=[];
  locale = 'es';
  obj : any={};


  
  
  constructor(
    private _reservaService : ReservaService,
    private _configuracionService : ConfiguracionService,
    private _router:Router,
    private _routerActivo:ActivatedRoute
  ) {

    this.formattedDate = formatDate(new Date(), 'yyyy-MM-dd','es');
    
    this._routerActivo.params.subscribe(params=>{
      if(params['fecha']){
        console.log(params['fecha']);
        this.formattedDate = formatDate(params['fecha'], 'yyyy-MM-dd','es');
      }
      
    });

    console.log(localStorage.getItem('name'));

    this.configuracion = this._configuracionService.configuracion;
    console.log(this.configuracion);

    
    if(!this.configuracion){
      this._configuracionService.
      getConfiguracionByCorreo(localStorage.getItem('name'))
      .subscribe(data=>{
          console.log(data[0]);
          this._configuracionService.configuracion = data[0];
          this.configuracion = data[0];
      })

    }


     


      if(this.configuracion.minTurno <= 30)
        this.salto = 50;

        if(this.configuracion.minTurno  >= 60  )
        this.salto = 100;


        this.llenarHorario(this.formattedDate);
        
  }


  ngOnInit() {
    
  }

  OnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }


  llenarHorario(fecha:string){

    // this.verDatePicker();

      console.log('llenarhorario',fecha);

      Horario.fecha = fecha;
  
      this.horario = [];
  
      console.log();
      console.log(this.configuracion);
      
       this.subscription =  this._reservaService.getReservasByEmpresaFecha(this.configuracion.idEmpresa,fecha).subscribe(  (data:Reserva[])=>{
        this.reservas = data;

        console.log(fecha);
        console.log(this.subscription);
        console.log('datos traidos',data);
        console.log(this.reservas);
        
      
        if(this.reservas != null)
      {

        this.resultado = Number(this.configuracion.horaCierre) - Number(this.configuracion.horaApertura);
        this.loading = false;
        for (let index = this.configuracion.horaApertura; index <= this.configuracion.horaCierre; index=index+this.salto) {
    
          let existe = false;
          let par = false;
          this.obj = new Reserva
          let num = index;

         
          if(index.toString().slice(2,4) == ('50')){
            num = index - 20;
            console.log(num);
          }
    
          this.reservas.forEach((element:Reserva) => {
            
           

            if(element.horaIni == num) 
            {
              this.obj.horaIni = num;
              this.obj.cliente = element.cliente;
              this.obj.fecha = fecha;
              this.obj.idReserva = element.idReserva;
              this.obj.activo = element.activo;
              this.obj.idCliente = element.idCliente;
              this.obj.idPersona = element.idPersona;
              this.obj.persona = element.persona;

              existe = true;
              this.horario.push(this.obj);
              
            }
          });
          if(existe == false)
          {
            this.obj.horaIni = num;
            this.obj.nombre = null;
            this.obj.fecha = fecha;
            this.horario.push(this.obj);
           
          }
        }
      } 
      
    } )

    
  console.log(this.horario);

   
  // algo.unsubscribe();
  }

  

  cambiarFecha(valor){
    console.log(valor);
    this.calendario = valor;

    this.formattedDate = formatDate(this.calendario, 'yyyy-MM-dd','es');
  
    // this._reservaService.getReservasByEmpresaFecha(1,formattedDate).subscribe( (data:any[])=>{
    //   this.reservas = data;
    //   console.log(data);
    // } )

  
    this.llenarHorario(this.formattedDate);

  }


  eliminarModal(reserva){

    $(document).ready(function(){
      $('.modal').modal();
    });

  

    this.reserva = reserva;
    console.log(this.reserva);

  }


  eliminarReserva(reserva)
  {
   

    console.log('eliminar reserva',reserva);  
    reserva.activo = false;

    let as = this._reservaService.UpdateReserva(reserva.idReserva,reserva);
      
    Promise.all([as]).then(data =>{
      console.log(data);
      this.llenarHorario(this.formattedDate);
    console.log(this.formattedDate);
    })

    
      // this._reservaService.getReservasByEmpresaFecha(this.configuracion.idEmpresa,this.formattedDate).subscribe(  (data:any[])=>{
      //   this.reservas = data;
      //   console.log('vuelta a cargar',data);
      // });

  }

  tomarHora(hora:any){
    
    Horario.hora = hora.horaIni;
    this._router.navigate(['nueva-reserva'])
  }
 

  
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
 



  verDatePicker(){
   
    console.log("calendario");
    $(document).ready(function(){
     
      $('.datepicker').datepicker(
        {
                  format: 'yyyy-mm-dd',
                  i18n: {
                      cancel: 'Cancelar',
                      clear: 'Limpiar',
                      done: 'Ok',
                      firstDay: 1,
                      previousMonth: '‹',
                      nextMonth: '›',
                      months: [
                          'Enero',
                          'Febrero',
                          'Marzo',
                          'Abril',
                          'Mayo',
                          'Junio',
                          'Julio',
                          'Agosto',
                          'Septiembre',
                          'Octubre',
                          'Noviembre',
                          'Diciembre'
                      ],
                      monthsShort: [
                          'Ene',
                          'Feb',
                          'Mar',
                          'Abr',
                          'May',
                          'Jun',
                          'Jul',
                          'Ago',
                          'Sep',
                          'Oct',
                          'Nov',
                          'Dic'
                      ],
          
                      weekdays: [
                          'Domingo',
                          'Lunes',
                          'Martes',
                          'Miércoles',
                          'Jueves',
                          'Viernes',
                          'Sábado'
                      ],
          
                      weekdaysShort: [
                          'Dom',
                          'Lun',
                          'Mar',
                          'Mié',
                          'Jue',
                          'Vie',
                          'Sáb'
                      ],
          
                      weekdaysAbbrev: ['D', 'L', 'M', 'M', 'J', 'V', 'S']
                  }
              }
      );
    });
  }

}
