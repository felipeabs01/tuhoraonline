import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class Profile {

  name:string;
  nickname:string;
  picture: string;
  sub:string;
  updated_at:Date;

 }



 export class ProfileG {

   static nombre:string;
   static nickname:string;
   static picture: string;
  static  sub:string;
   static updated_at:Date;
  
   }