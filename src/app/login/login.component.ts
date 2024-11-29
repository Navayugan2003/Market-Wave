import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private Routes:Router){}
  goToHome(){
    this.Routes.navigate(['home'])
  }
  goToSignup(){
    this.Routes.navigate(['signup'])
  }
}
