import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProfileRoutingModule } from './user-profile-routing.module';
import { UserProfileEditComponent } from './user-profile-edit/user-profile-edit.component';
import { UserProfileViewComponent } from './user-profile-view/user-profile-view.component';


@NgModule({
  declarations: [
    UserProfileEditComponent,
    UserProfileViewComponent
  ],
  imports: [
    CommonModule,
    UserProfileRoutingModule
  ]
})
export class UserProfileModule { }
