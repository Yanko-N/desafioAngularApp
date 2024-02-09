import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs'; //Serve para a pagina ser assincrona



@Injectable({
  providedIn: 'root'
})

export class GetFilmesService {
  private apiUrl = 'http://www.omdbapi.com/?s=lord&apikey=2dba97c6';
  private http;

  
  constructor(_http: HttpClient) {
      this.http =_http;
   }

  getFilmes():Observable<any>{
    return this.http.get(this.apiUrl);
  }
  getFilmesSearch(TextPesquisa: string): Observable<any> {
    return this.http.get(this.apiUrl).pipe(
      map((data: any) => {
        // Filtrar os filmes com base no nome (title)
        var movies =data.Search.filter((filme: any) =>
        filme.Title.toLowerCase().includes(TextPesquisa.toLowerCase())
      );
        return movies;
      })
    );
  }
}
