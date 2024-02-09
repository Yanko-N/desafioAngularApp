import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormularioRoutingModule } from './formulario-routing.module';
import { PostFormularioService } from './post-formulario.service';

import { ReactiveFormsModule } from '@angular/forms';

import { FormularioComponent } from './formulario.component';  // Import the component
import { FormComponent } from './form/form.component';
import { FormDataComponent } from './form-data/form-data.component';

@NgModule({
  declarations: [
    FormularioComponent,
    FormComponent,
    FormDataComponent
  ],
  providers: [PostFormularioService],
  imports: [
    CommonModule,
    FormularioRoutingModule,
    ReactiveFormsModule
  ],
})
export class FormularioModule { }
