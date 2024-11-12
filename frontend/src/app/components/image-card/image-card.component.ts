import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-card',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './image-card.component.html',
  styleUrl: './image-card.component.css'
})
export class ImageCardComponent {
  @Input() src = '';
  @Input() alt? = '';
}
