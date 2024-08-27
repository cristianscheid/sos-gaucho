import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from '../../components/carousel/carousel.component';

@Component({
  selector: 'app-feed-story',
  standalone: true,
  imports: [
    CommonModule,
    CarouselComponent
  ],
  templateUrl: './feed-story.component.html',
  styleUrl: './feed-story.component.css'
})
export class FeedStoryComponent {
  @Input() story: any;
}
