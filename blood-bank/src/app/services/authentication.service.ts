import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';
import { User } from '../user';
const url="http://localhost:8080/";
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private httpClient:HttpClient,private tokenStorage:TokenStorageService) { }
  authenticate(user:User):Observable<any>{
    return this.httpClient.post<User>("http://localhost:8080/authenticate",user,httpOptions)
  }
  register(user: User){
    return this.httpClient.post<User>(url+"signup",user,httpOptions)
  }

}
