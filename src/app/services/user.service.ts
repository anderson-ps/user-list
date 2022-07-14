import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = 'https://sheet.best/api/sheets/57b50cae-c579-407f-80fe-81b86f3b3017';
  httpOptions = {
    headers: new HttpHeaders({
      'content-Type': 'application/json',
    })
  }

  constructor(private httpClient:HttpClient) { }

  getUsers():Observable<User[]>{
    return  this.httpClient.get<User[]>(this.apiUrl);

  }

  postUser(user:User):Observable<User>{
    return this.httpClient.post<User>(this.apiUrl, user,this.httpOptions);
  }
}
