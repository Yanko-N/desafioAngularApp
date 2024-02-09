import { NgModule,NgZone  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FilmesRoutingModule } from './filmes-routing.module';
import { FilmesComponent } from './filmes.component';
import { FilmeComponent } from './filme/filme.component';
import { GetFilmesService } from './get-filmes.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FilmesComponent,
    FilmeComponent
  ],
  imports: [
    CommonModule,
    FilmesRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GetFilmesService]
})
export class FilmesModule { }
