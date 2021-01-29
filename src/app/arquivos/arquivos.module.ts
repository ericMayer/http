import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxFileDropModule } from 'ngx-file-drop';

import { ArquivosRoutingModule } from './arquivos.routing';
import { ArquivosComponent } from './arquivos.component';
import { SharedModule } from "../shared/modules/shared.module";
import { MaterialModule } from '../shared/modules/material.module';


@NgModule({
  declarations: [
    ArquivosComponent
  ],
  imports: [
    CommonModule,
    ArquivosRoutingModule,
    SharedModule,
    MaterialModule,
    NgxFileDropModule
  ]
})
export class ArquivosModule { }
