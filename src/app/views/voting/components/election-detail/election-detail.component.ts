import { Component, OnInit } from '@angular/core';
import { BallotService } from '../../services/ballot.service';
import { PositionsV } from '../../models/positions'
import { Eleccion } from '../../models/Election';
import { Vote } from '../../models/vote'
import { Inscription} from '../../models/inscription'
import { CommonModule } from '@angular/common';
import { Candidate } from '../../../candidates/model/candidate.model'
import { ActivatedRoute } from '@angular/router';
import { ElectionService } from 'src/app/views/election/service/election.service';
import { VotesService } from '../../services/votes.service';
import { forkJoin } from 'rxjs';
import { IconDirective, IconModule } from '@coreui/icons-angular';

@Component({
  selector: 'app-election-detail',
  imports: [CommonModule, IconModule],
  templateUrl: './election-detail.component.html',
  styleUrl: './election-detail.component.scss'
})
export class ElectionDetailComponent implements OnInit {
  eleccion!: Eleccion;
  positions: PositionsV[] = [];
  candidatesByPosition: Record<number, Candidate[]> = {};
  ballotId!: number;
  selectedCandidates: Record<number, number> = {}; // positionId => candidateId

  constructor(
    private route: ActivatedRoute,
    private electionService: ElectionService,
    private ballotService: BallotService,
    private votesService: VotesService

  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.electionService.getElectionById(id).subscribe({
      next: (election: any) => {
        console.log(election)
        this.eleccion = election;
        this.ballotService.getBallotByElectionId(election.id).subscribe({
          next: (ballot:any) => {
            this.ballotId = ballot[0].id;
            if (this.eleccion.status.toLowerCase() === 'inprogress') {
              this.loadPositionsAndCandidates();
            }
          }
        });
        return; // Evita ejecutar el if original fuera del callback
      }
    });
  }

  loadPositionsAndCandidates(): void {
    this.ballotService.getPositionsByElectionId(this.eleccion.id).subscribe({
      next: (positions) => {
        this.positions = positions;

        positions.forEach((pos) => {
          this.ballotService.getCandidatesByPositionByBallot(this.ballotId, pos.id!).subscribe({
            next: (candidates) => {
              this.candidatesByPosition[pos.id!] = candidates;
            }
          });
        });
      }
    });
  }
  guardarVoto(): void {
    const votacionesObservables = Object.entries(this.selectedCandidates).map(([posId, candidateId]) => {
      const positionId = Number(posId);
      return this.ballotService.getInscriptionByBallotCandidatePositionId(this.ballotId, positionId, candidateId)
        .pipe(); // Retorna un observable que devolverá el inscription[]
    });

    forkJoin(votacionesObservables).subscribe({
      next: (inscriptionsList) => {
        inscriptionsList.forEach((inscriptions, i) => {
          const positionId = Number(Object.keys(this.selectedCandidates)[i]);
          const candidateId = this.selectedCandidates[positionId];
          const inscription = inscriptions[0] as Inscription;

          const candidate = this.candidatesByPosition[positionId].find(c => c.id === candidateId);

          const vote: Vote = {
            date: new Date().toISOString(),
            electionTitle: this.eleccion.title,
            candidateName: `${candidate?.name} ${candidate?.lastname}`,
            ballotCode: `BAL-${this.ballotId}-${positionId}-${candidateId}`,
            ballotId: this.ballotId,
            candidateId,
            positionId,
            politicalOrganizationId: inscription.politicalOrganizationId
          };

          this.votesService.createVote(vote).subscribe({
            next: () => console.log(`Voto registrado: ${vote.candidateName}`),
            error: (err) => console.error('Error al guardar el voto:', err)
          });
        });
      },
      error: (err:any) => {
        console.error('Error obteniendo organización política:', err);
      }
    });
  }

}
