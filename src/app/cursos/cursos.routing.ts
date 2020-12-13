import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursosComponent } from './cursos.component';
import { FormCursoComponent } from './form-curso/form-curso.component';

const routes: Routes = [
  {
    path: '',
    component: CursosComponent,
    data: { titlePage: 'Cursos', icon: 'arrow_back', text: 'Voltar' }
  },
  {
    path: 'criar-curso',
    component: FormCursoComponent,
    data: { titlePage: 'Criar Curso', icon: 'arrow_back', text: 'Voltar' }
  },
  {
    path: 'editar-curso/:idCurso',
    component: FormCursoComponent,
    data: { titlePage: 'Editar Curso', icon: 'arrow_back', text: 'Voltar' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
