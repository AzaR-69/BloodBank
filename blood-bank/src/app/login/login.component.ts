import { DOCUMENT } from '@angular/common';
import { Component, Inject, Input, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { TokenStorageService } from '../services/token-storage.service';
import { User } from '../user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class LoginComponent implements OnInit,OnDestroy {
  user: User = new User;
  email='';
  isLoggedIn=false;
  @Input()
  error!: string | null;
  constructor(private service:AuthenticationService,private router: Router,private tokenStorage:TokenStorageService) { }
  ngOnDestroy(): void {
  }

  ngOnInit(): void {
    this.isLoggedIn=!!this.tokenStorage.getToken();
  }
  validate(){
    if(this.user.username!=='' && this.user.username!==null && this.user.password!=='' && this.user.password!==null){
    this.service.authenticate(this.user).subscribe(
      data=>{
        this.isLoggedIn=true;
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        this.email=this.tokenStorage.getUser().email;
        console.log("Login Succesfull")
        this.router.navigate(['/dashboard'])
      },
      error=>{
        this.error="Bad Credentials";
      }
    )}
    else{
      this.error='Bad Credentials'
    }
  }
}
