import { Component,Input } from '@angular/core';

//Isto define como é o componente
@Component({
  selector: 'app-filme',
  template: `
    <div class="card">
      <img [src]="filme.Poster" class="card-img-top fixed-image" alt="{{ filme.Title }}">
      <div class="card-body">
        <h5 class="card-title">{{ filme.Title }}</h5>
        <p class="card-text">{{ filme.Year }}</p>
        <p class="card-text"><strong>{{ filme.Type }}</strong></p>
      </div>
    </div>
  `
})
export class FilmeComponent {
  @Input() filme: any;
}
