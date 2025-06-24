import {Component, OnInit} from '@angular/core';
import {
  BadgeComponent,
  BorderDirective,
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardFooterComponent,
  CardHeaderComponent, CardTitleDirective, ColComponent,
  CollapseDirective,
  ContainerComponent,
  FormControlDirective,
  FormDirective,
  NavbarComponent,
  NavbarNavComponent, NavbarTogglerDirective,
  NavItemComponent,
  NavLinkDirective, RowComponent,
} from "@coreui/angular";
import {Router, RouterLink} from "@angular/router";
import {DatePipe, NgForOf, NgIf} from "@angular/common";
import {Election, ElectionStatus} from "../../model/election.model";
import {ElectionService} from "../../service/election.service";

@Component({
  selector: 'app-my-elections',
  standalone: true,
  imports: [
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    CardFooterComponent,
    ButtonDirective,
    RouterLink,
    NavbarComponent,
    ContainerComponent,
    CollapseDirective,
    NavbarNavComponent,
    NavItemComponent,
    NavLinkDirective,
    FormControlDirective,
    FormDirective,
    NavbarTogglerDirective,
    RowComponent,
    ColComponent,
    NgForOf,
    CardTitleDirective,
    BorderDirective,
    BadgeComponent,
    NgIf,
    DatePipe
  ],
  templateUrl: './my-elections.component.html',
})
export class MyElectionsComponent  implements OnInit{


  elections: Election[] = [];

  constructor( private electionService: ElectionService,
               private router: Router) { }

  ngOnInit() {
    this.getElections();
    this.getColorByStatus(ElectionStatus.PENDING);
  }

  getElections () {
    this.electionService.getAllElections().subscribe({
      next: (response: any) => {
        this.elections = response.elections;
      },
      error: (error) => {
        console.error('Error fetching elections', error);

      }
    })
  }

  getColorByStatus(status: ElectionStatus): string {
    switch (status) {
      case ElectionStatus.PENDING:
        return 'info';
      case ElectionStatus.CONFIRMED:
      case ElectionStatus.INPROGRESS:
        return 'info';
      case ElectionStatus.FINISHED:
        return 'success';
      case ElectionStatus.CANCELLED:
      case ElectionStatus.DELETED:
        return 'danger';
      default:
        return 'secondary';
    }
  }


}
