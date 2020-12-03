import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos.routing';
import { CardCursosComponent } from './card-cursos/card-cursos.component';
import { SharedModule } from '../shared/modules/shared.module';
import { MaterialModule } from '../shared/modules/material.module';
import { CursosComponent } from './cursos.component';

@NgModule({
  declarations: [
    CursosComponent,
    CardCursosComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class CursosModule { }
