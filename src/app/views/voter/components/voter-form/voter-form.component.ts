import { Component } from '@angular/core';
import {
  ButtonCloseDirective,
  ButtonDirective,
  ColComponent,
  FormControlDirective,
  FormDirective,
  FormLabelDirective,
  FormTextDirective,
  GutterDirective,
  ModalBodyComponent,
  ModalComponent,
  ModalFooterComponent,
  ModalHeaderComponent,
  ModalTitleDirective,
  ModalToggleDirective,
  RowComponent
} from "@coreui/angular";

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
    ButtonCloseDirective,
    FormDirective,
    RowComponent,
    GutterDirective,
    ColComponent,
    FormLabelDirective,
    FormControlDirective,
    FormTextDirective
  ],
  templateUrl: './voter-form.component.html',
})
export class VoterFormComponent {

}
