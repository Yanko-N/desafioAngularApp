// form.component.ts
import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Output() submitForm = new EventEmitter<any>();

  postForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.postForm = this.fb.group({
      body: ['', Validators.required],
      title: ['', Validators.required],
      publicationDate: ['', Validators.required],
      author: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.postForm.valid) {
      this.submitForm.emit(this.postForm.value);
    }
  }
}
