import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../services/token-storage.service';
import { UserService } from '../services/user.service';
import { User } from '../user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ProfileComponent implements OnInit {
  user:User=new User
  isEditable:boolean=false;
  constructor(private token:TokenStorageService,private router:Router,private service:UserService) { }
  id:any;
  ngOnInit(): void {
    if(!!this.token.getToken()){
      this.id=this.token.getUser().id;
      this.service.getById(this.id).subscribe(
        data=> this.user=data,
        error=> console.log("Error")
      )
    }
    else{
      this.router.navigate(['/login'])
    }
  }

  updateProfile(){
    this.service.update(this.user).subscribe(
      data=> this.isEditable=!this.isEditable,
      error=>console.error(error)
    )
  }

}
