import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private routes:Router){}

  goToView(){
    this.routes.navigate(['user-profile/view'])
  }
  goToLogin(){
    this.routes.navigate(['login'])
  }

}
