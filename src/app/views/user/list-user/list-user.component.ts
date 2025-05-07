import { Component } from '@angular/core';
import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardFooterComponent,
  CardHeaderComponent,
  TableDirective
} from "@coreui/angular";

@Component({
  selector: 'app-user',
  imports: [
    TableDirective,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    CardFooterComponent,
    ButtonDirective
  ],
  templateUrl: './list-user.component.html',
})
export class ListUserComponent {

  openModal() {

  }
}
