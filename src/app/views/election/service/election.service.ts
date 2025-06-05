import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Election} from "../model/election.model";

@Injectable({
  providedIn: 'root'
})
export class ElectionService {

  private url = environment.apiUrl + 'api/election/';

  constructor(private http: HttpClient) { }

  getAllElections(): Observable<Election> {
    return this.http.get<Election>(`${this.url}/list`);
  }

}
