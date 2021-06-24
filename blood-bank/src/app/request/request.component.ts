import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Donor } from '../donor';
import { RequestModel } from '../request-model';
import { DonorService } from '../services/donor.service';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  bloodType=["A+","A-","AB+","AB-","B+","B-","O+","O-"]
  constructor(private service:DonorService,private router:Router,private token:TokenStorageService) { }
  model:RequestModel=new RequestModel
  donors:Donor[]=[]
  anotherRequest=false;
  bloodRequest=false;
  check:boolean=false;
  isUser=false;
  isAdmin=false;
  role=""
  ngOnInit(): void {
    if(!!this.token.getToken()){
      this.refresh()
    }
    else{
      this.router.navigate(['/login'])
    }
  }
  requestBlood(){
    this.model.email=this.token.getUser().email;
    this.service.requestBlood(this.model).subscribe(
      data=>this.check=!this.check,
      error=>console.log(error)
    )
  }

  refresh(){
      this.role=this.token.getUser().role
      this.isUser=this.role==="ROLE_USER" 
      this.isAdmin=this.role==="ROLE_ADMIN"
      this.getDonorRequests()
  }

  updateDonor(donor:Donor,status:boolean){
    donor.active=status;
    donor.failed=!status;
    this.service.updateDonor(donor).subscribe(
      result=>this.ngOnInit(),
      error=>console.log(error)
    )
  }

  getDonorRequests(){
    this.service.getDonors().subscribe(
      result=>{this.donors=result},
      error=>console.log(error)
    )
  }

  bloodRequests(){
    this.bloodRequest=!this.bloodRequest;
  }

 otherRequests(){
    this.anotherRequest=!this.anotherRequest
  }
}
