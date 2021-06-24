import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Donor } from '../donor';
import { RequestModel } from '../request-model';

@Injectable({
  providedIn: 'root'
})
export class DonorService {

  constructor(private http:HttpClient) { }

  getDonors():Observable<Donor[]>
  {
    return this.http.get<Donor[]>("http://localhost:8080/donors");
  }

  getUser(email:string):Observable<Donor>
  {
    return this.http.get<Donor>(`http://localhost:8080/donors/email/${email}`)
  }
  donate(donor:Donor)
  {
    return this.http.post<Donor>("http://localhost:8080/donors/donate",donor);
  }

  getByBlood(bloodgroup:string)
  {
    return this.http.get<Donor[]>(`http://localhost:8080/donors/bloodgroup/${bloodgroup}`);
  }
  
  requestBlood(model:RequestModel)
  {
    return this.http.post<RequestModel>("http://localhost:8080/request",model)
  }

  deleteByEmail(email:string)
  {
    return this.http.delete<any>(`http://localhost:8080/donors/delete/${email}`);
  }

  updateDonor(donor:Donor)
  {
    return this.http.post<Donor>("http://localhost:8080/donors/updateRequest",donor)
  }

  updateProfile(donor:Donor)
  {
    return this.http.post<Donor>("http://localhost:8080/donors/edit",donor);
  }

  // autoDeleteIf90Days(){
  //   return this.http.delete<any>("http://localhost:8080/donors/autoDelete");
  // }
}
