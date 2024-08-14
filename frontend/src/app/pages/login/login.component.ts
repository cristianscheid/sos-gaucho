import { Component } from '@angular/core';
import { DefaultLoginLayoutComponent } from '../../components/default-login-layout/default-login-layout.component';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

interface LoginForm {
  email: FormControl,
  password: FormControl
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    DefaultLoginLayoutComponent, 
    ReactiveFormsModule,
    PrimaryInputComponent],
  providers: [
    LoginService,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  loginForm !: FormGroup<LoginForm>

  constructor(
    private router: Router,
    private loginService: LoginService
  ){
    this.loginForm = new FormGroup({
      email:    new FormControl( '', [Validators.required, Validators.email] ),
      password: new FormControl( '', [Validators.required, Validators.minLength(6)] ),
    })
  }

  submit(){
    this.navigate();
  }

  navigate(){
    this.router.navigate(["signup"]); //change to stories route
  }

}
