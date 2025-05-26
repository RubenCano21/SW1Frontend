import {Component, OnInit} from '@angular/core';
import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardFooterComponent,
  CardHeaderComponent, PaginationComponent,
  TableDirective
} from "@coreui/angular";
import {Voter} from "../../model/voter.model";
import {VoterService} from "../../service/voter.service";
import {NgForOf} from "@angular/common";
import {IconComponent, IconDirective} from "@coreui/icons-angular";

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
    IconComponent,
    IconDirective
  ],
  templateUrl: './voter-list.component.html',
})
export class VoterListComponent  implements OnInit{

  voters: Voter[] = [];

  constructor(private voterService: VoterService) {  }

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

}
