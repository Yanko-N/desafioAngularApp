import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-form-data',
  template: `
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{ data.Title }}</h5>
        <p class="card-text lead">{{ data.author }}</p>
        <p class="card-text">{{ data.body }}</p>
        <p class="card-text"><strong>{{ data.publicationDate }}</strong></p>
      </div>
    </div>
  `
})
export class FormDataComponent {
  @Input() data: any;
}
