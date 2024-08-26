import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedStoryComponent } from './feed-story.component';

describe('FeedStoryComponent', () => {
  let component: FeedStoryComponent;
  let fixture: ComponentFixture<FeedStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedStoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeedStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
