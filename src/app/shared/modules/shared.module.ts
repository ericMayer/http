import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { NgxCurrencyModule } from "ngx-currency";
import { NgxFileDropModule } from 'ngx-file-drop';
import { NgxMaskModule } from 'ngx-mask';

import { ReduceTextPipe } from '../pipes/reduceText.pipe';

import { CustomInputComponent } from '../components/custom-input/custom-input.component';
import { CustomTextareaComponent } from '../components/custom-textarea/custom-textarea.component';
import { FileUploadComponent } from '../components/file-upload/file-upload.component';
import { PopupConfirmacaoComponent } from '../components/popup-confirmacao/popup-confirmacao.component';



@NgModule({
  declarations: [
    CustomInputComponent,
    CustomTextareaComponent,
    FileUploadComponent,
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
    NgxFileDropModule,
    NgxMaskModule.forRoot()
  ],
  exports: [
    CustomInputComponent,
    CustomTextareaComponent,
    FileUploadComponent,
    ReduceTextPipe,
    NgxCurrencyModule
  ],
  entryComponents: [
    PopupConfirmacaoComponent
  ]
})
export class SharedModule { }
