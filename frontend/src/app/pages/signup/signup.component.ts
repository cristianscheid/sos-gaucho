import { Component } from '@angular/core';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { DefaultLoginLayoutComponent } from '../../components/default-login-layout/default-login-layout.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { passwordConfirmValidator } from '../../validators/password-confirm.validator';
import { NgIf } from '@angular/common';

interface SignupForm {
  name: FormControl,
  email: FormControl,
  password: FormControl,
  passwordConfirm: FormControl
}

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    NgIf,
    DefaultLoginLayoutComponent, 
    ReactiveFormsModule, 
    PrimaryInputComponent
  ],
  providers: [
    LoginService
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  signupForm !: FormGroup<SignupForm>

  constructor(
    private router: Router,
    private loginService: LoginService
  ) {
    this.signupForm = new FormGroup({
      name:             new FormControl('', [Validators.required, Validators.minLength(3)]),
      email:            new FormControl('', [Validators.required, Validators.email]),
      password:         new FormControl('', [Validators.required, Validators.minLength(6)]),
      passwordConfirm:  new FormControl('', [Validators.required, Validators.minLength(6)]), 
    }, passwordConfirmValidator )
  }

  submit(){
    this.loginService.signup(this.signupForm.value.name, this.signupForm.value.email, this.signupForm.value.password).subscribe({
      next:   () => this.navigate(),
      error:  () => console.log("Erro inesperado! Tente novamente")
    })
  }

  navigate(){
    this.router.navigate([""]); //TODO: change to complete-register route
  }

}
