import { Component, inject, Input } from '@angular/core';
import { ImageCircleComponent } from '../../components/image-circle/image-circle.component';
import { ImageGridComponent } from '../../components/image-grid/image-grid.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormInputComponent } from '../../components/form-input/form-input.component';
import { FormTextAreaComponent } from '../../components/form-text-area/form-text-area.component';

@Component({
  selector: 'app-story-profile',
  standalone: true,
  imports: [ImageCircleComponent, ImageGridComponent, FormInputComponent, FormTextAreaComponent, ReactiveFormsModule],
  templateUrl: './story-profile.component.html',
  styleUrl: './story-profile.component.css'
})
export class StoryProfileComponent {
  
  @Input() userImage: {src: string, alt?: string} = {src: '', alt: ''};
  @Input() name = '';
  @Input() city = '';
  @Input() contact = '';
  @Input() story = '';
  @Input() howToHelp = '';
  @Input() isEditMode = true;
  @Input() images: {src: string, alt?: string}[] = [];
  
  storyForm !: FormGroup;

  constructor() { 
    this.storyForm = new FormGroup({
      name: new FormControl(this.name, Validators.required),
      city: new FormControl(this.city),
      contact: new FormControl(this.contact, Validators.required),
      story: new FormControl(this.story),
      howToHelp: new FormControl(this.howToHelp)
    });

    if (this.isEditMode) {
      this.storyForm.enable();
    } else {
      this.storyForm.disable();
    }
  }
}
