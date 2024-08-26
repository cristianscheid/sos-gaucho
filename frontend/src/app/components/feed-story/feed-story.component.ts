import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feed-story',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './feed-story.component.html',
  styleUrl: './feed-story.component.css'
})
export class FeedStoryComponent {
  @Input() data: any;
}
