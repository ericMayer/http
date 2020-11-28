import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageComponent } from './core/page/page.component';

const routes: Routes = [
  { path: '', component: PageComponent },
  {
    path: 'cursos', loadChildren: () => import('./cursos/cursos.module')
      .then(m => m.CursosModule)
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
