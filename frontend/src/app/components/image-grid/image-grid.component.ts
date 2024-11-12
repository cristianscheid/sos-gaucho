import { Component, inject, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from '../carousel/carousel.component';
import { ImageCardComponent } from '../image-card/image-card.component';

@Component({
  selector: 'app-image-grid',
  standalone: true,
  imports: [ImageCardComponent],
  templateUrl: './image-grid.component.html',
  styleUrl: './image-grid.component.css'
})
export class ImageGridComponent {

  @Input() images: {src: string, alt?: string}[] = [];

  private modalService = inject(NgbModal);

  onImageClick(images: {src: string, alt?: string}[], index: number) {
    const modalRef = this.modalService.open(CarouselComponent, { centered: true });
    modalRef.componentInstance.images = images;
    modalRef.componentInstance.initialIndex = index;
  }
}
