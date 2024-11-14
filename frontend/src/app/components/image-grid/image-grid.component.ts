import { Component, inject, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from '../carousel/carousel.component';
import { ImageCardComponent } from '../image-card/image-card.component';
import { Image } from '../../types/image.type';

@Component({
  selector: 'app-image-grid',
  standalone: true,
  imports: [ImageCardComponent],
  templateUrl: './image-grid.component.html',
  styleUrl: './image-grid.component.css'
})
export class ImageGridComponent {

  @Input() images: Image[] = [];

  private modalService = inject(NgbModal);

  onImageClick(images: Image[], index: number) {
    const modalRef = this.modalService.open(CarouselComponent, { centered: true });
    modalRef.componentInstance.images = images;
    modalRef.componentInstance.initialIndex = index;
  }
}
