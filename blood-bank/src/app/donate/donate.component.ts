import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Donor } from '../donor';
import { DonorService } from '../services/donor.service';
import { TokenStorageService } from '../services/token-storage.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent implements OnInit {
  donor:Donor=new Donor;
  check=false;
  active=false;
  failed=false;
  bloodType=["A+","A-","AB+","AB-","B+","B-","O+","O-"]
  currentUser:any;
  constructor(private router: Router,private userService:UserService,private tokenStorage:TokenStorageService,private service:DonorService) { }

  ngOnInit(): void {
    if(!!this.tokenStorage.getToken()){
      this.currentUser=this.tokenStorage.getUser();
      this.service.getUser(this.currentUser.email).subscribe(
        result=>{this.check=!this.check,this.active=result.active,this.failed=result.failed},
        error=>console.log(error)
      );
      this.userService.getById(this.currentUser.id).subscribe(
        result=>this.donor=result,
        error=>console.log(error)
      )
    }
    else{
      this.router.navigate(['/login'])
    }
  }
  donate(){
    this.donor.email=this.currentUser.email
    this.service.donate(this.donor).subscribe(
      data=>{this.check=!this.check},
      error=>console.log(error)
    );
  }
  deleteRequest(){
    var email=this.currentUser.email
    this.service.deleteByEmail(email).subscribe(
      result=>{this.check=!this.check,this.active=!this.active},
      error=>console.log(error)
    )
  }
}
