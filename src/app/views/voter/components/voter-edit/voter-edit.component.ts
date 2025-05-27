import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {VoterService} from "../../service/voter.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-voter-edit',
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './voter-edit.component.html',
  styleUrl: './voter-edit.component.scss'
})
export class VoterEditComponent implements OnInit{

  voterForm!: FormGroup;
  voterId!: number;
  errrorMessage: string | null = null;


  constructor(private fb: FormBuilder,
              private voterService: VoterService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.voterForm = this.fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      phone: ['', Validators.required],
      identity_document: ['', Validators.required],
      birth_date: [''],
      nationality_id: [null, Validators.required],
    });

    this.voterId = Number(this.route.snapshot.paramMap.get('id'));
    this.voterService.getVoterById(this.voterId).subscribe({
      next: (voter) => this.voterForm.patchValue(voter),
      error: (error) => {
        console.error('Error fetching voter data', error);
        this.errrorMessage = 'Error fetching voter data';
        this.router.navigate(['/voters/list']);
      }
    })
  }

  updateVoter() {
    if (this.voterForm.invalid) {
      this.voterForm.markAllAsTouched();
      return;
    }

    this.voterService.updateVoter(this.voterId, this.voterForm.value).subscribe({
      next: () => {
        console.log('Voter updated successfully');
        alert('Voter updated successfully');
        this.router.navigate(['/voters/list']);
      },
      error: (error) => {
        console.error('Error updating voter', error);
        alert("Error al actualizar el votante");
      }
    });
  }

}
