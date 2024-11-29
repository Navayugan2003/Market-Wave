import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileViewComponent } from './user-profile-view/user-profile-view.component';
import { UserProfileEditComponent } from './user-profile-edit/user-profile-edit.component';

const routes: Routes = [
  {
    path: '',
    children:[
      {
        path: 'view',
        component: UserProfileViewComponent
      },
      {
        path: 'edit',
        component: UserProfileEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserProfileRoutingModule { }
