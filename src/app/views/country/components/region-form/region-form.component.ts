import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {CountryService} from "../../service/country.service";
import {Region} from "../../model/region.model";
import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent, FormControlDirective,
  GutterDirective,
  RowComponent
} from "@coreui/angular";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-region-form',
  imports: [
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    ReactiveFormsModule,
    GutterDirective,
    RowComponent,
    ColComponent,
    ButtonDirective,
    FormControlDirective,
    NgIf
  ],
  templateUrl: './region-form.component.html',
})
export class RegionFormComponent  {

  @Output() regionAdded = new EventEmitter<Region>();

  regionForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private countryService: CountryService
  ) {
    this.regionForm = this.formBuilder.group({
      name: ['', Validators.required],
      id_country: [0, Validators.required]
    });
  }

  onSubmit(): void {
    if (this.regionForm.invalid) {
      this.regionForm.markAllAsTouched();
      return;
    }

    const newRegion: Region = this.regionForm.value;

    this.countryService.registerRegion(newRegion).subscribe({
      next: (data) => {
        console.log('Region registered successfully:', data);
        this.regionAdded.emit(data);
        this.regionForm.reset(); // Limpia el formulario después del registro
      },
      error: (error) => {
        console.error('Error al registrar la región:', error);
      }
    });
  }
}
