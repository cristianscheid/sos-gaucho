import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedStoryComponent } from '../../components/feed-story/feed-story.component';
import { StoriesService } from '../../services/stories.service';
import { FeedStory } from '../../types/feed-story.type';

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
export class FeedComponent implements OnInit {
  feedStories: FeedStory[] = [];

  constructor(private storiesService: StoriesService) {}

  ngOnInit(): void {
    this.loadStories();
  }

  loadStories(): void {
    this.storiesService.getStories().subscribe(
      (response) => {
        this.feedStories = response.stories;
      },
      (error) => {
        console.error('Error fetching stories:', error);
      }
    );
  }
}
