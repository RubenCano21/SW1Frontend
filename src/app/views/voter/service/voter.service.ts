import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Voter, VoterListResponse} from "../model/voter.model";

@Injectable({
  providedIn: 'root'
})
export class VoterService {

  private apiUrl = environment.apiUrl + '/api/voters';

  constructor(private http: HttpClient) { }

  getAllVoters(): Observable<VoterListResponse> {
    return this.http.get<VoterListResponse>(this.apiUrl)
  }

  createVoter(voter: Voter): Observable<Voter> {
    return this.http.post<Voter>(this.apiUrl, voter);
  }
}
