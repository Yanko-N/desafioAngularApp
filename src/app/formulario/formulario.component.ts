import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostFormularioService } from './post-formulario.service';


@Component({
  selector: 'app-formulario',

  template: `
  <div class="container"> 
    <div class="row">
      <app-form (submitForm)="SubmitForm($event)"></app-form>
    </div>
    <div class="row my-5">
        <div *ngFor="let dados of Dados" class="col-md-2 mb-4">
          <app-form-data [data]="dados"></app-form-data>
        </div>
    </div>
  </div>`,
})
export class FormularioComponent implements OnInit {
  Dados: any[] = [];

  constructor(private postFormularioService: PostFormularioService, private router: Router) { }
  ngOnInit(): void {
    this.CarregarDados();
  }
  SubmitForm(formData: any) {
    // Chamo o serviço para enviar os Dados
    this.postFormularioService.enviarDados(formData).subscribe(response => {
      console.log("Form enviado", response);
      this.router.navigate(['/']);
    });

  }

  CarregarDados() {
    this.postFormularioService.getDados().subscribe((data) => {
      this.Dados = data;
    });
  }
}
