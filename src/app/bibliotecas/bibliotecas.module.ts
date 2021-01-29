import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BibliotecasRouting } from './bibliotecas.routing';
import { BibliotecasComponent } from './bibliotecas.component';
import { SharedModule } from '../shared/modules/shared.module';
import { MaterialModule } from '../shared/modules/material.module';



@NgModule({
  declarations: [BibliotecasComponent],
  imports: [
    CommonModule,
    BibliotecasRouting,
    SharedModule,
    MaterialModule
  ]
})
export class BibliotecasModule { }
