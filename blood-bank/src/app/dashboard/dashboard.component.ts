import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class DashboardComponent implements OnInit {
  isLoggedIn=false;
  currentUser:any;
  constructor(private router: Router,private tokenStorage:TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn=!!this.tokenStorage.getToken();
    if(this.isLoggedIn){
      this.currentUser=this.tokenStorage.getUser();
    }
    else{
      this.router.navigate(['/login'])
    }
  }
  logOut():void{
    this.tokenStorage.signOut();
    this.isLoggedIn=false;
    this.router.navigate(['/login']);
  }
}
