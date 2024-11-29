import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile-view',
  templateUrl: './user-profile-view.component.html',
  styleUrl: './user-profile-view.component.scss'
})
export class UserProfileViewComponent {
  constructor(private routes:Router){}
  goToEdit(){
    this.routes.navigate(['user-profile/edit'])
  }
  goToHome(){
    this.routes.navigate(['home'])
  }
}
