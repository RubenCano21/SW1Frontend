import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Election} from "../model/election.model";

@Injectable({
  providedIn: 'root'
})
export class ElectionService {

  private url = environment.apiUrl + '/api/elections';

  constructor(private http: HttpClient) { }

  getAllElections(): Observable<Election> {
    //console.log(this.url)
    return this.http.get<Election>(`${this.url}`);
  }

  getElectionById(id:number): Observable<Election> {
    //console.log(this.url)
    return this.http.get<Election>(`${this.url}/${id}`);
  }

}
