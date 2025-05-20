import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User, UserListResponse} from "../model/user.model";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //'http://localhost:8000/api/users';
  private apiUrl = environment.apiUrl + '/api';

  constructor(private http: HttpClient) { }

  getUsers() : Observable<UserListResponse> {
    return this.http.get<UserListResponse>(`${this.apiUrl}/users`);
  }

}
