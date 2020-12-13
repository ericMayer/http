import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CursosRoutingModule } from './cursos.routing';
import { CardCursosComponent } from './card-cursos/card-cursos.component';
import { SharedModule } from '../shared/modules/shared.module';
import { MaterialModule } from '../shared/modules/material.module';
import { CursosComponent } from './cursos.component';
import { FormCursoComponent } from '../cursos/form-curso/form-curso.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CursosComponent,
    CardCursosComponent,
    FormCursoComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    FormsModule,
    SharedModule,
    MaterialModule,
    RouterModule
  ]
})
export class CursosModule { }
