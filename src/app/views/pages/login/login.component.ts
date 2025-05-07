import { Component } from '@angular/core';
import { NgStyle} from '@angular/common';
import { IconDirective } from '@coreui/icons-angular';
import { ContainerComponent, RowComponent, ColComponent, CardGroupComponent,
  CardComponent, CardBodyComponent,  InputGroupComponent, InputGroupTextDirective, FormControlDirective, ButtonDirective } from '@coreui/angular';
import {Router, RouterLink} from "@angular/router";
import {AuthService} from "./auth.service";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
  imports: [ContainerComponent, RowComponent, ColComponent, CardGroupComponent, CardComponent, CardBodyComponent,
     InputGroupComponent, InputGroupTextDirective, IconDirective, FormControlDirective,
    ButtonDirective, NgStyle, RouterLink, ReactiveFormsModule, FormsModule, HttpClientModule],
  providers: [AuthService]
})
export class LoginComponent {


  username: string = '';
  password: string = '';
  error: string = '';

  constructor( private authService: AuthService,
               private router: Router) {

  }

  form = new FormGroup({
    uname: new FormControl('', [Validators.required, Validators.minLength(6)]),
    password: new FormControl('', [Validators.required]),
  });

  get f() {
    return this.form.controls;
  }



  submit(): void {
    if (this.form.invalid) {
      return;
    }

    const username = this.form.value.uname!;
    const password = this.form.value.password!;

    this.authService.login(username, password).subscribe({
      next: (response) => {
        localStorage.setItem('token', response.access_token);
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        console.error('Login error', error);
        alert(error.error.detail || 'Error al iniciar sesión');
      }
    });
  }



  protected readonly FormGroup = FormGroup;

}
