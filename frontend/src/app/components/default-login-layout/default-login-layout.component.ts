import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PrimaryInputComponent } from '../primary-input/primary-input.component';

@Component({
  selector: 'app-default-login-layout',
  standalone: true,
  imports: [PrimaryInputComponent],
  templateUrl: './default-login-layout.component.html',
  styleUrl: './default-login-layout.component.css'
})
export class DefaultLoginLayoutComponent {
  @Input() headerTitle: string = "";
  @Input() buttonLabel: string = "";
  
  @Output("submit") onSubmit = new EventEmitter();

  submit(){
    this.onSubmit.emit();
  }
}
