import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DonateComponent } from './donate/donate.component';
import { DonorsComponent } from './donors/donors.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ProfileComponent } from './profile/profile.component';
import { RequestComponent } from './request/request.component';
import { SignupComponent } from './signup/signup.component';
const routes: Route[] = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'manageUsers',component:ManageUsersComponent},
  {path:'donors',component:DonorsComponent},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'profile',component:ProfileComponent},
  {path:'donate',component:DonateComponent},
  {path:'request',component:RequestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
