import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Candidate, CandidateStatus} from "../../model/candidate.model";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {CandidateService} from "../../service/candidate.service";
import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  FormControlDirective, GutterDirective, RowComponent
} from "@coreui/angular";
import {NgForOf, NgIf} from "@angular/common";
import {Country} from "../../../country/model/country.model";
import {CountryService} from "../../../country/service/country.service";
import {Region} from "../../../country/model/region.model";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-candidate-register',
  imports: [
    ButtonDirective,
    CardBodyComponent,
    CardComponent,
    CardHeaderComponent,
    ColComponent,
    FormControlDirective,
    FormsModule,
    NgIf,
    ReactiveFormsModule,
    RowComponent,
    GutterDirective,
    NgForOf,
    RouterLink
  ],
  templateUrl: './candidate-register.component.html',
})
export class CandidateRegisterComponent implements OnInit {

  @Output() candidateRegistered = new EventEmitter<Candidate>();

  candidateForm: FormGroup;

  candidateStatus = CandidateStatus;

  nationalities: Country[]= [];
  regions: Region[] = [];

  constructor(private formBuilder: FormBuilder,
              private candidateService: CandidateService,
              private countryService: CountryService) {
    this.candidateForm = this.formBuilder.group({
      name: [''],
      lastname: [''],
      phone: [''],
      birth_date: [''],
      nationality_id: [''],
      residence_id: [''],
      user_id: [''],
      status: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.getNationalityName();
    this.getRegionSelected();
  }

  onSubmit(): void {
    if (this.candidateForm.invalid) {
      this.candidateForm.markAllAsTouched();
      return;
    }

    const newCandidate: Candidate = this.candidateForm.value;

    this.candidateService.registerCandidate(newCandidate).subscribe({
      next: (data) => {
        console.log('Candidate registered successfully:', data);
        this.candidateRegistered.emit(data);
        this.candidateForm.reset(); // Reset the form after registration
      },
      error: (error) => {
        console.error('Error registering candidate:', error);
      }
    });
  }

  get candidateStatusOptions(): String[] {
    return Object.values(this.candidateStatus)
  }

  getNationalityName() {
    this.countryService.getAllCountries().subscribe({
      next: (data) => {
        this.nationalities = !Array.isArray(data) ? [data] : data;
      },
      error: (error) => {
        console.error('Error fetching nationalities:', error);
      }
    });
  }

  getRegionSelected() {
    this.candidateForm.get('nationality_id')?.valueChanges.subscribe(idCountry => {
      this.candidateForm.get('residence_id')?.setValue('');
      if (idCountry) {
        this.countryService.getAllRegionsByCountryId(idCountry).subscribe( regions => {
          this.regions = regions;
        });
      } else {
        this.regions = [];
      }
    })
  }

}
