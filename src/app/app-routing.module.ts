import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index/index.component';

//lazy routing
const routes: Routes = [
  { path: '', pathMatch: 'full', component:IndexComponent },//making it the default one
  { path: 'filmes', loadChildren: () => import('./filmes/filmes.module').then(m => m.FilmesModule) },
  { path: 'formulario', loadChildren: () => import('./formulario/formulario.module').then(m => m.FormularioModule) },

  {path: 'index', loadChildren: () => import('./index/index.module').then(m => m.IndexModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
