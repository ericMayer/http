import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { ReduceTextPipe } from '../pipes/reduceText.pipe';


@NgModule({
  declarations: [
    ReduceTextPipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
  ],
  exports: [
    ReduceTextPipe
  ]
})
export class SharedModule { }
