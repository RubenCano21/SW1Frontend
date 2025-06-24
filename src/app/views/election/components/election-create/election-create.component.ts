import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {
  ButtonDirective, CardBodyComponent, CardComponent, CardHeaderComponent,
  ColComponent, FormCheckComponent, FormCheckInputDirective, FormCheckLabelDirective,
  FormControlDirective,
  GutterDirective, RowComponent,
} from "@coreui/angular";
import {ElectionService} from "../../service/election.service";
import {Election, ElectionMode, ElectionStatus} from "../../model/election.model";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-election-create',
  imports: [
    ColComponent,
    GutterDirective,
    FormControlDirective,
    ButtonDirective,
    CardComponent,
    CardBodyComponent,
    CardHeaderComponent,
    NgIf,
    ReactiveFormsModule,
    RowComponent,
    RouterLink,
    NgForOf,
    FormCheckComponent,
    FormCheckInputDirective,
    FormCheckLabelDirective,
  ],
  templateUrl: './election-create.component.html',
})
export class ElectionCreateComponent implements OnInit{


  electionForm!: FormGroup;

  electionModes =  Object.values(ElectionMode);
  electionStatus = Object.values(ElectionStatus);

  constructor(private electionService: ElectionService,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.electionForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],

      // minimun_age: [null],
      // maximum_age: [null],

      // status: ['PENDING', Validators.required],
      start_datetime: ['', Validators.required],
      end_datetime: ['', Validators.required],
      timezone: ['UTC'],

      //mode: ['PRIVATE', Validators.required],
      show_results_in_real_time: [false],
      allow_multiple_votes: [false],
      anonymous_voting: [true],
      authenticated_voters_only: [true],
      //max_votes_per_user: [null],
    });
  }

  onSubmit(): void {
    if (this.electionForm.invalid) {
      this.electionForm.markAllAsTouched();
      return;
    }

    const payload: Partial<Election> = this.electionForm.value;


    this.electionService.createElection(payload).subscribe({
      next: (data) => {
        console.log('Election created successfully:', data);
        this.electionForm.reset(); // Reset the form after successful creation
      },
      error: (error) => {
        console.error('Detalles del error:', error.error?.detail || error.message);
      }
    });
  }



}
