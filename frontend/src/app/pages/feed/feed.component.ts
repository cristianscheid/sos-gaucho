import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedStoryComponent } from '../../components/feed-story/feed-story.component';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [
    CommonModule,
    FeedStoryComponent
  ],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.css'
})
export class FeedComponent {
  feedStories: any[] = [];

  /**
   * Initializes the component and generates mock feed stories.
   * 
   * This mock data is used for development and testing purposes.
   * It will be replaced with real data fetched from the backend API in the future.
   */
  constructor() {
    this.generateFeedStories(15);
  }

  generateFeedStories(count: number) {
    for (let i = 1; i <= count; i++) {
      this.feedStories.push({
        id: i,
        title: `Story ${i}`,
        description: `Description for story ${i}.`,
        updatedAt: new Date(),
        images: this.generateImages()
      });
    }
  }

  generateImages() {
    const images = [];
    // Random number between 3 and 7
    const numberOfImages = Math.floor(Math.random() * 5) + 3;
    for (let i = 0; i < numberOfImages; i++) {
      // Random number between 001 and 040
      const imageNumber = ('000' + Math.floor(Math.random() * 40 + 1)).slice(-3);
      images.push({
        src: `assets/mock-data/story-images/image_${imageNumber}.jpg`,
        alt: `Random Image ${imageNumber}`
      });
    }
    return images;
  }
}