import { Component, Input } from '@angular/core';
import { ImageCircleComponent } from '../../components/image-circle/image-circle.component';
import { ImageGridComponent } from '../../components/image-grid/image-grid.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormInputComponent } from '../../components/form-input/form-input.component';
import { FormTextAreaComponent } from '../../components/form-text-area/form-text-area.component';
import { StoryService } from '../../services/story.service';
import { StoryResponse } from '../../types/story-response.type';

@Component({
  selector: 'app-story-profile',
  standalone: true,
  imports: [ImageCircleComponent, ImageGridComponent, FormInputComponent, FormTextAreaComponent, ReactiveFormsModule],
  templateUrl: './story-profile.component.html',
  styleUrl: './story-profile.component.css'
})
export class StoryProfileComponent {

  @Input() isEditMode = false;
  @Input() isLoading = true;

  @Input()
  set id(storyId: number) {
    this.getStory(storyId);
  }

  story!: StoryResponse;
  storyForm!: FormGroup;

  constructor(private storyService: StoryService) {
    this.storyForm = new FormGroup({
      name: new FormControl('', Validators.required),
      city: new FormControl(''),
      contact: new FormControl('', Validators.required),
      story: new FormControl('', Validators.required),
      howToHelp: new FormControl('', Validators.required),
    });

    if (this.isEditMode) {
      this.storyForm.enable();
    } else {
      this.storyForm.disable();
    }
  }

  private getStory(id: number) {
    this.isLoading = true;

    this.storyService.getStory(id).subscribe({
      next: (story) => {
        this.story = story;
        this.fillForm();
        this.isLoading = false;
      },
      error: (error) => {
        console.error(error);
        this.isLoading = false;
      }
    });
  }

  private fillForm() {
    this.storyForm.setValue({
      name: this.story.benefitedName,
      city: this.story.city ?? '',
      contact: this.story.contact,
      story: this.story.longDescription,
      howToHelp: this.story.helpNeeded,
    });
  }
}
