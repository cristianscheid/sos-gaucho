import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  @Input() images: { src: string, alt: string }[] = [];
  @Input() carouselId: string = 'carousel';
  @Input() initialIndex: number = 0;
  
  ngOnInit() {
    // Ensures that the initial index is within a valid range
    if (this.initialIndex < 0 || this.initialIndex >= this.images.length) {
      this.initialIndex = 0;
    }
  }
}
