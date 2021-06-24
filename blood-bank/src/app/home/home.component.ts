import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class HomeComponent implements OnInit {
  currentUser:any;
  isUser=false;
  isAdmin=false;
  isLoggedIn=false; 
  role="";
  constructor(private token:TokenStorageService,private router:Router) { }

  ngOnInit(): void {

    setInterval(()=>this.refresh(),100)
  }
  logOut():void{
    this.token.signOut();
    if(this.isUser){
    this.isUser=!this.isUser}
    if(this.isAdmin){
    this.isAdmin=!this.isAdmin}
    this.router.navigate(['/login'])
  }
  refresh(){
    this.currentUser=this.token.getUser()
    this.isLoggedIn=!!this.token.getToken()
    if(this.isLoggedIn){
      this.role=this.token.getUser().role
      this.isUser=this.role==="ROLE_USER"
      this.isAdmin=this.role==="ROLE_ADMIN"
      }
  }

}
