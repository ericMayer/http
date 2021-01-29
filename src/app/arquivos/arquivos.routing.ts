import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArquivosComponent } from './arquivos.component';

const routes: Routes = [
  {
    path: '', component: ArquivosComponent, data: { titlePage: 'Arquivos' }
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArquivosRoutingModule { }
