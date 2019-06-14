
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import * as auth0 from 'auth0-js';
import { PersonaG, Persona } from '../models/persona.module';
import { ConfiguracionService } from './configuracion.service';
import { Configuracion, ConfiguracionG } from '../models/configuracion.module';
import { PersonaService } from './persona.service';

(window as any).global = window;

@Injectable()
export class AuthService {


  userProfile: any;

  auth0 = new auth0.WebAuth({
    clientID: '7uFDFqNsdR3NwuHoAR7OBybpVXXU4Zro',
    domain: 'spotiap.auth0.com',
    responseType: 'token id_token',
    //redirectUri: 'http://localhost:4200/signin-auth0',
   redirectUri: 'http://localhost:4200/callback',
    // redirectUri: 'http://200.83.91.146:4200/callback',
     // redirectUri: 'http://localhost:403/signin-auth0',
     //redirectUri: 'http://200.83.91.146:403/', 
    scope: 'openid profile'
  });

  constructor(public router: Router,
    public _configuracionService:ConfiguracionService,
    public _personaService:PersonaService
    ) {}

  public login(): void {
    this.auth0.authorize();
  }


  // src/app/auth/auth.service.ts

// ...


  // ...
  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.setSession(authResult);
       // Extraer aqui
        console.log(authResult.idTokenPayload.name);
     
        this.configuracion(authResult.idTokenPayload.name);

        this.router.navigate(['inicio']);

        


      } else if (err) {
        this.router.navigate(['inicio']);
        console.log(err);
      }
    });
  }

  private setSession(authResult): void {
    // Set the time that the Access Token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    localStorage.setItem('name', authResult.idTokenPayload.name);
    
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('name');
    // Go back to the home route
    this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // Access Token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at') || '{}');
    return new Date().getTime() < expiresAt;
  }


 

  public getProfile(cb): void {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      throw new Error('Access Token must exist to fetch profile');
    }
  
    const self = this;
    this.auth0.client.userInfo(accessToken, (err, profile) => {
      if (profile) {
        self.userProfile = profile;
      }
      cb(err, profile);   
    });
  }


  configuracion(correo:string){

   


    this._configuracionService.getConfiguracionByCorreo(correo).subscribe( (data:Configuracion)=>{
       
      this._configuracionService.configuracion = data[0];
      console.log(ConfiguracionG.idEmpresa);

       this._personaService.getpersonaBycorreo(correo).subscribe((res:Persona) =>{     
        this._personaService.persona = res[0];
      
        console.log(res[0]);
        console.log(PersonaG.email);
        console.log(this._personaService.persona);
        console.log(this._configuracionService.configuracion);
      })

    });
  }

}




