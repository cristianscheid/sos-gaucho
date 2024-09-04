import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-primary-input',
  standalone: true,
  imports: [],
  templateUrl: './primary-input.component.html',
  styleUrl: './primary-input.component.css'
})
export class PrimaryInputComponent {
  @Input() type: string = "";
  @Input() placeholder: string = "";
  @Input() legend: string = "";
}
