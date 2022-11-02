import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserType } from './user-type';

@Injectable({
  providedIn: 'root'
})
export class UserService
{


  formUserTypeRequest
  //List of Users -- Retrieve all Records
  userTypes : UserType[];   //All User Type

  constructor(private httpClient: HttpClient)
  {
      
  }

  //Call REST API
  //  1 Get all UserTypes
  getAllUserTypes(): Observable<any>
  { 
    return this.httpClient.get(environment.apiUrl + "api/userTypes");
  }

}