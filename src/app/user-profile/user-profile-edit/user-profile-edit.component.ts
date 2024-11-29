import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile-edit',
  templateUrl: './user-profile-edit.component.html',
  styleUrl: './user-profile-edit.component.scss'
})
export class UserProfileEditComponent {
  constructor(private routes:Router){}
  goToView(){
    this.routes.navigate(['user-profile/view'])
  }
}
