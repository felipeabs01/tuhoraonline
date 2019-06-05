import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { PersonaG } from 'src/app/models/persona.module';
import { ConfiguracionService } from 'src/app/services/configuracion.service';
import { Configuracion } from 'src/app/models/configuracion.module';
import { Profile } from 'src/app/models/profile.mudule';
import { formatDate } from '@angular/common';




@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  fecha:string;
  profile:Profile;

  constructor(
    public auth:AuthService,
    public router: Router,
    public _configuracionService:ConfiguracionService,
    public _router:Router
  ) { 
    auth.handleAuthentication();

    // this.fecha = formatDate(new Date(), 'yyyy-MM-dd','es');
    
  }
 
  
  ngOnInit() {
    
    if (this.auth.userProfile && this.auth.userProfile !==undefined) {
      this.profile = this.auth.userProfile;
      console.log(this.profile);
      this.auth.configuracion(this.profile.name);
    } else {
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
        console.log(this.profile);
        this.auth.configuracion(this.profile.name);
      });
    }

 

   
    
  }

 

  login(){

    this.auth.login();
   
      
  }
  salir(){
    this.profile=null;
    this.auth.logout();
  }
}
