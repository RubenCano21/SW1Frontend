import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Country} from "../model/country.model";

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiCountry = environment.apiUrl+ '/api/countries';

  constructor(private http : HttpClient) { }

  getAllCountries() : Observable<Country> {
    return this.http.get<Country>(this.apiCountry);
  }
}
