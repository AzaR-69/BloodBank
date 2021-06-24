import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class SignupComponent implements OnInit,OnDestroy  {
  user:User=new User();
  password2:string="";
  msg:string="";
  isSuccessful=false;
  constructor(private router:Router,private service:AuthenticationService) {
  }
  
  register(){
    if(this.password2===(this.user.password)){
      this.service.register(this.user).subscribe(
        result=>{
          this.isSuccessful=!this.isSuccessful
          this.router.navigate(['/signup'])
        },
        error=>{this.msg="Oops something went wrong. Please try again later"}
      );
    }
    else{
      this.gotoRegister()
    }
  }
  
  gotoRegister(){
    this.msg="Both passwords must match!"
    this.router.navigate(['/signup']);
  }
  gotoHome(){
    this.router.navigate(['/login']);
  }
  
  ngOnDestroy(): void {
  }

  ngOnInit(): void {
  }

}
