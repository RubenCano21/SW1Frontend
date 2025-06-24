import { Component } from '@angular/core';
import { CommonModule, NgStyle} from '@angular/common';
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
  imports: [
    CommonModule, ContainerComponent, RowComponent, ColComponent, CardGroupComponent, CardComponent, CardBodyComponent,
     InputGroupComponent, InputGroupTextDirective, IconDirective, FormControlDirective,
    ButtonDirective, NgStyle, RouterLink, ReactiveFormsModule, FormsModule, HttpClientModule],
  providers: [AuthService]
})
export class LoginComponent {

  showLogin: boolean = false;
  username: string = '';
  password: string = '';
  error: string = '';
  typeLogin: string = 'admin';

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
    const type = this.typeLogin;

    this.authService.login(username, password, type).subscribe({
      next: (response) => {
        localStorage.setItem('token', response.access_token);
        localStorage.setItem('userId', response.user_id);
        localStorage.setItem('voterId', response.voter_id);
        if (this.typeLogin ==='admin')
          this.router.navigate(['/dashboard']);
        else
          this.router.navigate(['/voting'])
      },
      error: (error) => {
        console.error('Login error', error);
        alert(error.error.detail || 'Error al iniciar sesión');
      }
    });
  }
  selectUserType(userType: string): void {
    this.typeLogin = userType;
    this.showLogin = true;
  }

  goBack(): void {
    this.showLogin = false;
    this.typeLogin = '';
    this.form.reset(); // Limpia el formulario al volver
  }



  protected readonly FormGroup = FormGroup;

}
