import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Election} from "../model/election.model";
import {AuthService} from "../../pages/login/auth.service";

@Injectable({
  providedIn: 'root'
})
export class ElectionService {

  private url = environment.apiUrl + '/api/elections';

  constructor(private http: HttpClient,
              private authService: AuthService) { }

  getAllElections(): Observable<Election[]> {
    return this.http.get<Election[]>(`${this.url}`);
  }

  createElection(election : Partial<Election>) : Observable<Election> {
    const userId = this.authService.getUserId();
    if (userId) {
      election.user_id = userId;
    }
    return this.http.post<Election>(this.url, election);
  }

}
