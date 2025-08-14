import { Component, OnInit } from '@angular/core';
import { BallotService } from '../../services/ballot.service';
import { PositionsV } from '../../models/positions'
import { Eleccion } from '../../models/election';
import { Vote } from '../../models/vote'
import { Inscription} from '../../models/inscription'
import { CommonModule } from '@angular/common';
import { Candidate } from '../../../candidates/model/candidate.model'
import { ActivatedRoute, Router } from '@angular/router';
import { ElectionService } from '../../../election/service/election.service';
import { VotesService } from '../../services/votes.service';
import { forkJoin } from 'rxjs';
import { firstValueFrom } from 'rxjs';
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
  ballotCode!: string;
  comprobante!: Vote;
  showComprobante!:boolean;
  loadingVote: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private electionService: ElectionService,
    private ballotService: BallotService,
    private votesService: VotesService,
    private router: Router

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
            this.ballotCode = ballot[0].code;
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

  async guardarVoto(): Promise<void> {
  try {
    for (const [positionIdStr, candidateId] of Object.entries(this.selectedCandidates)) {
      const positionId = Number(positionIdStr);

      console.log(`📌 Procesando posición: ${positionId}, candidato: ${candidateId}`);

      const inscriptionResponse = await firstValueFrom(
        this.ballotService.getInscriptionByBallotCandidatePositionId(
          this.ballotId,
          positionId,
          candidateId
        )
      );
      console.log(inscriptionResponse.political_organization_id)
      const inscriptionId = inscriptionResponse.political_organization_id;


      const candidate = this.candidatesByPosition[positionId].find(c => c.id === candidateId);
      if (!candidate) {
        console.warn(`⚠️ Candidato no encontrado en memoria para ID ${candidateId}`);
        continue;
      }

      const vote: Vote = {
        date: "2025-06-24",
        election_title: this.eleccion.title,
        candidate_name: `${candidate.name} ${candidate.lastname}`,
        ballot_id: this.ballotId,
        ballot_code: this.ballotCode,
        candidate_id : candidateId,
        position_id : positionId,
        political_organization_id: inscriptionId
      };

      console.log('✅ Enviando voto:', vote);
      this.loadingVote = true;
      this.comprobante = await firstValueFrom(this.votesService.createVote(vote)) as Vote;
      this.loadingVote = false;
      console.log(`✅ Voto guardado: ${vote.candidate_name}`);
    }

    alert('🎉 Todos los votos se han registrado correctamente.');
    this.showComprobante = true;

  } catch (error) {
    console.error('❌ Error durante el proceso de votación:', error);
    alert('Ocurrió un error al guardar los votos. Revisa la consola para más detalles.');
  }
}

  showModal(){

  }

  redirectToScan(hash:string){
    window.open(`https://amoy.polygonscan.com/tx/${hash}`, '_blank');
  }

  goBack(){
    this.router.navigate(["/voting"])
  }

}
