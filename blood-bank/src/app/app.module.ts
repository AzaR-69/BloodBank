import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpInterceptorService } from './services/http-interceptor.service';
import { AuthenticationService } from './services/authentication.service';
import { HomeComponent } from './home/home.component';
import { TokenStorageService } from './services/token-storage.service';
import { DonorsComponent } from './donors/donors.component';
import { DonorService } from './services/donor.service';
import { ProfileComponent } from './profile/profile.component';
import { DonateComponent } from './donate/donate.component';
import { RequestComponent } from './request/request.component';
import { BloodRequestComponent } from './blood-request/blood-request.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    HomeComponent,
    DonorsComponent,
    ProfileComponent,
    DonateComponent,
    RequestComponent,
    BloodRequestComponent,
    ManageUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthenticationService,HttpInterceptorService,DonorService,TokenStorageService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
