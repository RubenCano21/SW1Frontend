import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Candidate} from "../model/candidate.model";

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  private _url = environment.apiUrl + '/api/candidates';

  constructor(private http: HttpClient) { }

  getAllCandidates(): Observable<Candidate> {
    return this.http.get<Candidate>(this._url);
  }

  registerCandidate(candidate: Candidate): Observable<Candidate> {
    return this.http.post<Candidate>(this._url, candidate);
  }

}
