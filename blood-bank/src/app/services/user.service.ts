import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { 
  }

  getById(id:any):Observable<any>{
    return this.http.get<any>(`http://localhost:8080/findById/${id}`);
  }

  update(user:User){
    return this.http.put<User>("http://localhost:8080/updateProfile",user)
  }

  getUsers(){
    return this.http.get<User[]>("http://localhost:8080/getUsers")
  }

  deleteById(id:string)
  {
    return this.http.delete<any>(`http://localhost:8080/deleteUser/${id}`)
  }
}
