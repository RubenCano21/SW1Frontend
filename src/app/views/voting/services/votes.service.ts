import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VotesService {
  private url = environment.apiUrl + '/api/votes';
  constructor(private http: HttpClient) { }

  createVote(voteData: any) {
    return this.http.post(`${this.url}`, voteData);
  }
}
