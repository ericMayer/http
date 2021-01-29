import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';

import { PageComponent } from './core/page/page.component';

const routes: Routes = [
  {
    path: '',
    component: PageComponent,
    children: [
      {
        path: 'cursos', loadChildren: () => import('./cursos/cursos.module')
          .then(m => m.CursosModule)
      },
      {
        path: 'arquivos', loadChildren: () => import('./arquivos/arquivos.module').then(m => m.ArquivosModule)
      },
      {
        path: 'bibliotecas', loadChildren: () => import('./bibliotecas/bibliotecas.module').then(m => m.BibliotecasModule)
      }
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
