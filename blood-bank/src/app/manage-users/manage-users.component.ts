import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../services/token-storage.service';
import { UserService } from '../services/user.service';
import { User } from '../user';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {
  users:User[]=[]
  user: User=new User
  isEditable=false
  constructor(private router:Router,private token:TokenStorageService,private userService:UserService) { }

  ngOnInit(): void {
    if(this.token.getUser().role==="ROLE_ADMIN"){
      this.userService.getUsers().subscribe(
        data=>this.users=data,
        error=>error.log(error)
      )
    }
    else{
      this.router.navigate(['/login'])
    }
  }

  edit(id:any)
  {    
    this.userService.getById(id).subscribe(
      data=>this.user=data,
      error=>console.log(error)
    )
    this.isEditable=!this.isEditable
  }
  updateProfile(){
    this.userService.update(this.user).subscribe(
      data=>{this.isEditable=!this.isEditable,this.ngOnInit()},
      error=>console.log(error)
    )
  }

  delete(id:any){
    this.userService.deleteById(id).subscribe(
      data=>this.ngOnInit(),
      error=>console.log(error)
    )
  }
}
