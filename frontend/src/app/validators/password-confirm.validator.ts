import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const passwordConfirmValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password')?.value;
  const confirmPassword = control.get('passwordConfirm')?.value;

  return password === confirmPassword ? null : { passwordNoMatch: true };
};