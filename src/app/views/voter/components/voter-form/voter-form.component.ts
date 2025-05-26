import {Component} from '@angular/core';
import {
  ButtonDirective,
  ColComponent,
  FormControlDirective,
  FormDirective,
  GutterDirective,
  ModalBodyComponent,
  ModalComponent,
  ModalFooterComponent,
  ModalHeaderComponent,
  ModalTitleDirective,
  ModalToggleDirective,
  RowComponent
} from "@coreui/angular";
import {VoterService} from "../../service/voter.service";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-voter-form',
  imports: [
    ModalTitleDirective,
    ModalComponent,
    ModalHeaderComponent,
    ModalToggleDirective,
    ModalBodyComponent,
    ModalFooterComponent,
    ButtonDirective,
    FormDirective,
    RowComponent,
    GutterDirective,
    ColComponent,
    FormControlDirective,
    ReactiveFormsModule,
  ],
  templateUrl: './voter-form.component.html',
})
export class VoterFormComponent{

  voterForm: FormGroup;

  constructor(private fb: FormBuilder,
              private voterService: VoterService,
              private router: Router) {

    this.voterForm = this.fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      phone: ['', Validators.required],
      identity_document: ['', Validators.required],
      birth_date: [''], // opcional
      nationality_id: [null, Validators.required],
    })

  }

  registerVoter() {

    if (this.voterForm.invalid) {
      this.voterForm.markAllAsTouched();
      return;
    }

    const voter = this.voterForm.value;

    this.voterService.createVoter(voter).subscribe({
      next: (response) => {
        console.log('Voter registered successfully:', response);
        alert('Voter registered successfully');
        this.router.navigate(['/voter/list']);
        this.voterForm.reset();
      },
      error: (error) => {
        console.error('Error registering voter:', error);
        alert('Error registering voter: ' + (error.error.message || 'Unknown error'));
      }
    })
  }





}
