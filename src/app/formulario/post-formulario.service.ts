import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PostFormularioService {

  private apiUrl = 'https://65c550dadae2304e92e430f5.mockapi.io/post';

  constructor(private http: HttpClient) {}

  enviarDados(postData: any): Observable<any> {
    // Enviar dados para o endpoint usando o  POST
    return this.http.post(this.apiUrl, postData);
  }
  getDados():Observable<any>{
    return this.http.get(this.apiUrl);
  }
}

