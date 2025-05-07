import { Component } from '@angular/core';
import { IconDirective } from '@coreui/icons-angular';
import { ContainerComponent, RowComponent, ColComponent, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, FormControlDirective, ButtonDirective } from '@coreui/angular';
import {AuthService} from "../login/auth.service";
import {Router, RouterLink} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {HttpClientModule,} from "@angular/common/http";

@Component({

    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
  imports: [ContainerComponent, RowComponent, ColComponent, CardComponent, CardBodyComponent,
    FormDirective, InputGroupComponent, InputGroupTextDirective, IconDirective,
    FormControlDirective, ButtonDirective, FormsModule, RouterLink, HttpClientModule],
})
export class RegisterComponent {

  user = {
    username: '',
    email: '',
    full_name: '',
    password: ''
  }

  constructor(private authService: AuthService,
              private router: Router) { }


  register(){
    this.authService.register(this.user).subscribe({
      next: (res) => {
        alert('Usuario registrado con éxito');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error(err);
        alert(err.error.message || 'Error al registrar');
      }
    });
  }
}
