import {Component, OnInit} from '@angular/core';
import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardFooterComponent,
  CardHeaderComponent,
  TableDirective
} from "@coreui/angular";
import {User} from "../model/user.model";
import {UserService} from "../service/user.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-user',
  imports: [
    TableDirective,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    CardFooterComponent,
    ButtonDirective,
    NgForOf
  ],
  templateUrl: './list-user.component.html',
})
export class ListUserComponent implements OnInit{

   users: User[] = [];

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.listUsers();
  }

  listUsers() {
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.users = Array.isArray(data) ? data : [data];
      },
      error: (error) => {
        console.error('Error fetching users', error);
      }
    })
  }


  openModal() {

  }
}
