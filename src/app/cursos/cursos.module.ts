import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CursosRoutingModule } from './cursos.routing';
import { CardCursosComponent } from './card-cursos/card-cursos.component';
import { SharedModule } from '../shared/modules/shared.module';
import { MaterialModule } from '../shared/modules/material.module';
import { CursosComponent } from './cursos.component';
import { FormCursoComponent } from '../cursos/form-curso/form-curso.component';

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
    ReactiveFormsModule,
    SharedModule,
    MaterialModule,
    RouterModule
  ]
})
export class CursosModule { }
