import { Component, Input } from '@angular/core';
import { Image } from '../../types/image.type';

@Component({
  selector: 'app-image-circle',
  standalone: true,
  imports: [],
  templateUrl: './image-circle.component.html',
  styleUrl: './image-circle.component.css'
})
export class ImageCircleComponent {
  @Input() image: Image = { src: '' };
  @Input() width = 0;
  @Input() height = 0;
}