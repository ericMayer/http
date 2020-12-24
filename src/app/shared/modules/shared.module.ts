import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { NgxMaskModule } from 'ngx-mask';
import { NgxCurrencyModule } from "ngx-currency";

import { ReduceTextPipe } from '../pipes/reduceText.pipe';

import { CustomInputComponent } from '../components/custom-input/custom-input.component';
import { CustomTextareaComponent } from '../components/custom-textarea/custom-textarea.component';
import { PopupConfirmacaoComponent } from '../components/popup-confirmacao/popup-confirmacao.component';



@NgModule({
  declarations: [
    CustomInputComponent,
    CustomTextareaComponent,
    PopupConfirmacaoComponent,
    ReduceTextPipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    NgxCurrencyModule,
    NgxMaskModule.forRoot()
  ],
  exports: [
    CustomInputComponent,
    CustomTextareaComponent,
    ReduceTextPipe,
    NgxCurrencyModule
  ],
  entryComponents: [
    PopupConfirmacaoComponent
  ]
})
export class SharedModule { }
