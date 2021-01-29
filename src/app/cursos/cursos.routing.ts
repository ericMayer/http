import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursosComponent } from './cursos.component';
import { FormCursoComponent } from './form-curso/form-curso.component';

const routes: Routes = [
  {
    path: '',
    component: CursosComponent,
    data: { titlePage: 'Cursos' }
  },
  {
    path: 'criar-curso',
    component: FormCursoComponent,
    data: { titlePage: 'Criar Curso' }
  },
  {
    path: 'editar-curso/:idCurso',
    component: FormCursoComponent,
    data: { titlePage: 'Editar Curso' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
