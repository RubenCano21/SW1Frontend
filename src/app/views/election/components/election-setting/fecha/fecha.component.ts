import { Component } from '@angular/core';
import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  FormControlDirective,
  FormDirective,
  FormFeedbackComponent,
  FormLabelDirective,
  GutterDirective,
  RowDirective
} from "@coreui/angular";

@Component({
  selector: 'app-fecha',
  imports: [
    ButtonDirective,
    CardBodyComponent,
    CardComponent,
    CardHeaderComponent,
    ColComponent,
    FormControlDirective,
    FormDirective,
    FormFeedbackComponent,
    FormLabelDirective,
    RowDirective,
    GutterDirective
  ],
  templateUrl: './fecha.component.html',
})
export class FechaComponent {

}
