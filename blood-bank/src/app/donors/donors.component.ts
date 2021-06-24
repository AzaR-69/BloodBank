import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Donor } from '../donor';
import { DonorService } from '../services/donor.service';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-donors',
  templateUrl: './donors.component.html',
  styleUrls: ['./donors.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class DonorsComponent implements OnInit {
  donors:Donor[]=[];
  donor:Donor=new Donor
  role="";
  edit=false;
  addDonor=false;
  isAdmin=false
  bloodGroup="";
  bloodType=["A+","A-","AB+","AB-","B+","B-","O+","O-"]
  constructor(private service:DonorService,private router:Router,private token:TokenStorageService) { }
  available:boolean=false;
  ngOnInit(): void {
    if(!!this.token.getToken()){
      this.role=this.token.getUser().role;
      this.isAdmin=this.role==='ROLE_ADMIN'
      this.getDonors()
    }
    else{
      this.router.navigate(['/login'])
    }
  }
  notEditable(){
    this.edit=!this.edit
    this.addDonor=!this.addDonor
    this.donor=new Donor
  }
  editable(email:string){
    this.edit=!this.edit
    this.service.getUser(email).subscribe(
      result=>{this.donor=result},
      error=>console.log(error)
    )
  }

  editProfile(){
    this.service.updateProfile(this.donor).subscribe(
      result=> {this.edit=!this.edit,this.addDonor=!this.addDonor,this.ngOnInit()},
      error=>console.log(error)
    )
  }
  
  getByBlood(){
    this.service.getByBlood(this.bloodGroup).subscribe(
      result=>{this.donors=result,this.available=!this.available},
      error=>console.log(error)
    )
  }
  getDonors(){
    this.service.getDonors().subscribe(
      data=> this.donors=data
    )
  }
  delete(email:string){
    this.service.deleteByEmail(email).subscribe(
      result=>{this.getDonors()},
      error=>console.log(error)
    )
    this.ngOnInit()
  }

}
