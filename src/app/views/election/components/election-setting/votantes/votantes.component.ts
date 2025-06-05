import {Component, effect, signal} from '@angular/core';
import {
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  FormCheckComponent,
  FormCheckInputDirective, FormCheckLabelDirective
} from "@coreui/angular";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-votantes',
  imports: [
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    ReactiveFormsModule,
    FormCheckComponent,
    FormCheckInputDirective,
    FormCheckLabelDirective,
    FormsModule,
  ],
  templateUrl: './votantes.component.html',
  styleUrl: './votantes.component.scss'
})
export class VotantesComponent {

  readonly checkIn = signal(true);
  readonly formGroup = new FormGroup({
    checkInCtrl: new FormControl({ value: true, disabled: false })
  });

  constructor() {
    setTimeout(() => {
      this.checkIn.set(false);
    }, 5000);

    setTimeout(() => {
      this.checkIn.set(true);
    }, 8000);

    effect(() => {
      this.formGroup.get('checkInCtrl')!.setValue(this.checkIn());
    });

    this.formGroup.valueChanges.pipe(takeUntilDestroyed()).subscribe((value) => {
      this.checkIn.set(value.checkInCtrl as boolean);
    });
  }
}
