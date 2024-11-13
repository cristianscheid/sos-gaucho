import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-form-text-area',
  standalone: true,
  imports: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormTextAreaComponent),
      multi: true
    }
  ],
  templateUrl: './form-text-area.component.html',
  styleUrl: './form-text-area.component.css'
})
export class FormTextAreaComponent implements ControlValueAccessor {
  @Input() isDisabled = false;
  @Input() placeholder = '';
  @Input() title = '';
  @Input() value = '';

  onChange = (value: any) => {};
  onTouched = () => {};

  writeValue(obj: any): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
}
