import {Component, OnInit} from '@angular/core';
import {Election} from "../../model/election.model";
import {ElectionService} from "../../service/election.service";
import {
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ProgressComponent,
} from "@coreui/angular";
import {NgForOf} from "@angular/common";
import {ElectionWidgetComponent} from "../election-widget/election-widget.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-election-list',
  standalone: true,
  imports: [
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    NgForOf,
    ElectionWidgetComponent,
    ProgressComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './election-list.component.html',
})
export class ElectionListComponent implements OnInit{

  elections : Election[] = [];

  constructor(private electionService: ElectionService) { }

  ngOnInit(): void {
    this.listAllElections()
  }


  listAllElections() {
    this.electionService.getAllElections().subscribe({
      next: (data: any) => {
        this.elections = data.elections;
      },
      error: (error) => {
        console.error('Error fetching elections:', error);
      }
    })
  }

  viewDetails(id: number) {

  }

  editElection(id: number) {

  }

  deleteElection(id: number) {

  }
}
