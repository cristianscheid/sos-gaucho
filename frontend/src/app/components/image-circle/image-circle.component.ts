import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-circle',
  standalone: true,
  imports: [],
  templateUrl: './image-circle.component.html',
  styleUrl: './image-circle.component.css'
})
export class ImageCircleComponent {
  @Input() src = '';
  @Input() alt? = '';
  @Input() width = 0;
  @Input() height = 0;
}