import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  constructor (private Routes:Router){

}
  goToLogin(){
    this.Routes.navigate(['login'])
  }
  goToHome(){
    this.Routes.navigate(['home'])
  }
}
