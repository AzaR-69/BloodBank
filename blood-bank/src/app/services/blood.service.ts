import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestModel } from '../request-model';

@Injectable({
  providedIn: 'root'
})
export class BloodService {

  constructor(private http:HttpClient) { }
  getBloodRequests()
  {
    return this.http.get<RequestModel[]>("http://localhost:8080/bloodrequest")
  }

  updateBloodRequest(model:RequestModel)
  {
    return this.http.post<any>("http://localhost:8080/bloodrequest/update",model)
  }

  getRequestsByEmail(email:string){
    return this.http.get<RequestModel[]>(`http://localhost:8080/bloodrequest/getByEmail/${email}`)
  }

  deleteRequest(email:string,patientName:string)
  {
    return this.http.delete<any>(`http://localhost:8080/bloodrequest/delete/${email}/${patientName}`)
  }
}
