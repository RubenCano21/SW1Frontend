import {Component, OnInit} from '@angular/core';
import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardFooterComponent,
  CardHeaderComponent, ModalToggleDirective, PaginationComponent,
  TableDirective
} from "@coreui/angular";
import {Voter} from "../../model/voter.model";
import {VoterService} from "../../service/voter.service";
import {NgForOf} from "@angular/common";
import {VoterFormComponent} from "../voter-form/voter-form.component";
import {FormBuilder} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-voter-list',
  imports: [
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    TableDirective,
    CardFooterComponent,
    PaginationComponent,
    NgForOf,
    ButtonDirective,
    VoterFormComponent,
    ModalToggleDirective,
    RouterLink,
  ],
  templateUrl: './voter-list.component.html',
})
export class VoterListComponent  implements OnInit{

  voters: Voter[] = [];

  constructor(private voterService: VoterService,
              private fb: FormBuilder,
              protected router: Router) {  }

  ngOnInit(): void {
    this.listVoters();
  }

  listVoters() {
    this.voterService.getAllVoters().subscribe({
      next: (data) => {
        this.voters =  data.voters;
      },
      error: (error) => {
        console.error('Error fetching voters data:', error);
      },
    });
  }

  calculateAge(birthDateString: string | undefined): number | null {
    if (!birthDateString) return null;
    const today = new Date();
    const birthDate = new Date(birthDateString);

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  }

}
