import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestModel } from '../request-model';
import { BloodService } from '../services/blood.service';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-blood-request',
  templateUrl: './blood-request.component.html',
  styleUrls: ['./blood-request.component.css']
})
export class BloodRequestComponent implements OnInit {
  isAdmin=false;
  isUser=false;
  requests:RequestModel[]=[]
  role="";
  constructor(private service:BloodService,private router:Router,private token:TokenStorageService) {

   }

  ngOnInit(): void {
    if(!!this.token.getToken()){
      this.role=this.token.getUser().role
      this.isAdmin=this.role==="ROLE_ADMIN" 
      this.isUser=this.role==="ROLE_USER" 
      if(this.isAdmin)
      {
      this.service.getBloodRequests().subscribe(
        data=>this.requests=data,
        error=>console.log(error)
      )
      }
      else{
        this.service.getRequestsByEmail(this.token.getUser().email).subscribe(
          result=>this.requests=result,
          error=>console.log(error)
        )
      }
    }
    else{
      this.router.navigate(['/login'])
    }
  }

  updateRequest(model:RequestModel, status:boolean)
  {
    model.status=status
    this.service.updateBloodRequest(model).subscribe(
      result=>{console.log("success"),this.ngOnInit()},
      error=>console.log(error)
    )
  }

  deleteRequest(email:string,patientName:string)
  {
    this.service.deleteRequest(email,patientName).subscribe(
      result=>this.ngOnInit(),
      error=>console.log(error)
    )
  }
}
