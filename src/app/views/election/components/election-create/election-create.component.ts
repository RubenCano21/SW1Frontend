import { Component } from '@angular/core';
import {
  ButtonDirective, CardBodyComponent, CardComponent, CardHeaderComponent,
  ColComponent,
  FormControlDirective,
  FormDirective, FormFeedbackComponent,
  FormLabelDirective, FormSelectDirective,
  GutterDirective, InputGroupComponent, InputGroupTextDirective,
  RowDirective
} from "@coreui/angular";

@Component({
  selector: 'app-election-create',
  imports: [
    ColComponent,
    GutterDirective,
    FormLabelDirective,
    FormDirective,
    RowDirective,
    FormControlDirective,
    FormFeedbackComponent,
    InputGroupComponent,
    InputGroupTextDirective,
    FormSelectDirective,
    ButtonDirective,
    CardComponent,
    CardBodyComponent,
    CardHeaderComponent,
  ],
  templateUrl: './election-create.component.html',
})
export class ElectionCreateComponent {

}
