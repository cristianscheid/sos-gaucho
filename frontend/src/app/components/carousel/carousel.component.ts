import { Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbActiveModal, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, NgbCarouselModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent implements OnInit {
  @Input() images: { src: string, alt?: string }[] = [];
  @Input() carouselId: string = 'carousel';
  @Input() initialIndex: number = 0;
  
  activeModal = inject(NgbActiveModal);

  ngOnInit() {
    // Ensures that the initial index is within a valid range
    if (this.initialIndex < 0 || this.initialIndex >= this.images.length) {
      this.initialIndex = 0;
    }
  }
  
  onClose() {
    this.activeModal.close();
  }
}
