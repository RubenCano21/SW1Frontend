import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Country} from "../model/country.model";
import {Region} from "../model/region.model";

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiCountry = environment.apiUrl+ '/api/countries';

  constructor(private http : HttpClient) { }

  getAllCountries() : Observable<Country> {
    return this.http.get<Country>(this.apiCountry);
  }

  getCountryById(id: number): Observable<Country> {
    return this.http.get<Country>(`${this.apiCountry}/countries/${id}`);
  }

  registerCountry(country: Country): Observable<Country> {
    return this.http.post<Country>(this.apiCountry, country);
  }

  updateCountry(id: number, country: Country): Observable<Country> {
    return this.http.put<Country>(`${this.apiCountry}/countries/${id}`, country);
  }

  deleteCountry(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiCountry}/countries/${id}`);
  }

  // Service methods for regions can be added here if needed

  getAllRegions(): Observable<Region> {
    return this.http.get<Region>(`${this.apiCountry}/regions`);
  }

  registerRegion(region: Region): Observable<Region> {
    return this.http.post<Region>(`${this.apiCountry}/regions`, region);
  }

  loadCountry(id: number, country: Country): Observable<Country> {
    return this.http.put<Country>(`${this.apiCountry}/load-countries/${id}`, country);
  }
}
