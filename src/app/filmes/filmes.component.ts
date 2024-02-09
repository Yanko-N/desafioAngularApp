// filmes.component.ts
import { Component, OnInit } from '@angular/core';
import { GetFilmesService } from './get-filmes.service';

@Component({
  selector: 'app-filmes',
  template: `
    <div>
       <!-- Seção de Pesquisa -->
      
      <div class="row">
        <div class="col-2 ">
          <div class="input-group mb-3">
            <input type="text" class="form-control" [(ngModel)]="TextPesquisa" placeholder="Pesquisar filmes">
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="button" (click)="pesquisar()">Pesquisar</button>
            </div>
          </div>
        </div>
      </div>
     
      <!-- Lista de Filmes -->
      
      <div class="row">
        <div *ngFor="let filme of filmes" class="col-md-2 mb-4">
          <app-filme [filme]="filme"></app-filme>
        </div>
      </div>
  </div>
  `,
})

export class FilmesComponent implements OnInit {
  TextPesquisa: string = '';
  filmes: any[] = [];

  constructor(private getFilmesService: GetFilmesService) { }

  ngOnInit(): void {
    this.carregarFilmes();
  }

  pesquisar() {
    // lógica de pesquisa aqui
   this.getFilmesService.getFilmesSearch(this.TextPesquisa).subscribe((data)=>{
    this.filmes=data;
   });
  }

  private carregarFilmes() {
    // obter a lista de filmes
    this.getFilmesService.getFilmes().subscribe((data) => {
      this.filmes = data.Search;
    });
  }
}
