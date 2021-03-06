import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BibliotecasComponent } from './bibliotecas.component';

const routes: Routes = [
  { path: '', component: BibliotecasComponent,  data: { titlePage: 'Bibliotecas' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BibliotecasRouting { }
