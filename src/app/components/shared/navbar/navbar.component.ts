import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { PersonaG } from 'src/app/models/persona.module';
import { ConfiguracionService } from 'src/app/services/configuracion.service';
import { Configuracion } from 'src/app/models/configuracion.module';
import { Profile } from 'src/app/models/profile.mudule';




@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  profile:Profile;

  constructor(
    public auth:AuthService,
    public router: Router,
    public _configuracionService:ConfiguracionService,
    public _router:Router
  ) { 
    auth.handleAuthentication();

     console.log("handle");

  }

  
  ngOnInit() {
    console.log(this.auth);
    console.log(this.auth.userProfile);
    if (this.auth.userProfile && this.auth.userProfile !==undefined) {
      this.profile = this.auth.userProfile;
      console.log(this.profile);
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
