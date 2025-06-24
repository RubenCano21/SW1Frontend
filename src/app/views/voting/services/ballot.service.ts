import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class BallotService {
  private url = environment.apiUrl + '/api/ballots';

  constructor(private http: HttpClient) { }

  getBallotByElectionId(electionId: number) {
    return this.http.get<any[]>(`${this.url}/election/${electionId}`);
  }

  getPositionsByElectionId(electionId: number) {
    return this.http.get<any[]>(`${this.url}/positions/elections/${electionId}`);
  }

  getCandidatesByPositionByBallot(ballotId: number, positionId: number) {
    return this.http.get<any[]>(`${this.url}/${ballotId}/candidates/positions/${positionId}`);
  }

  getInscriptionByBallotCandidatePositionId(ballotId: number, positionId: number, candidateId: number) {
    return this.http.get<any[]>(`${this.url}/org-pol`, {
      params: {
        ballot_id: ballotId,
        candidate_id: candidateId,
        position_id: positionId
      }
    });
  }



}
