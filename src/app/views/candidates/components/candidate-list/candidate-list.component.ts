import {Component, OnInit} from '@angular/core';
import {Candidate} from "../../model/candidate.model";
import {CandidateService} from "../../service/candidate.service";
import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardFooterComponent,
  CardHeaderComponent, ModalToggleDirective, PaginationComponent, TableDirective
} from "@coreui/angular";
import {NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {EdadPipe} from "../../../../shared/edad.pipe";

@Component({
  selector: 'app-candidate-list',
  standalone: true,
  imports: [
    ButtonDirective,
    CardBodyComponent,
    CardComponent,
    CardFooterComponent,
    CardHeaderComponent,
    NgForOf,
    PaginationComponent,
    TableDirective,
    ModalToggleDirective,
    RouterLink,
    EdadPipe
  ],
  templateUrl: './candidate-list.component.html',
})
export class CandidateListComponent implements OnInit{

  candidates: Candidate[] = [];

  constructor(private candidateService: CandidateService) {
  }

  ngOnInit(): void {
    this.listCandidates();
  }

  listCandidates(){
    this.candidateService.getAllCandidates().subscribe({
      next: (data) => {
        this.candidates = !Array.isArray(data) ? [data] : data;
      },
      error: (error) => {
        console.error('Error fetching candidates data:', error);
      },
    });
  }


  deleteCandidate(id: number) {

  }
}
