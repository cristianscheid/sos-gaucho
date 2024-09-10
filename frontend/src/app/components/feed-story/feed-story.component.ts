import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedStory } from '../../types/feed-story.type';
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
  @Input() story: FeedStory = { id: 0, title: '', description: '', updatedAt: new Date(), images: [] };
}
