import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, ElementRef, OnInit, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';

import {  FileSystemFileEntry, NgxFileDropEntry } from 'ngx-file-drop';

import { ArquivosService } from '../shared/services/arquivos.service';
import { MessageModalService } from '../shared/services/message-modal.service';
import { UtilsService } from '../shared/services/utils.service';
import { filterResponse, uploadProgress } from '../shared/operators/rxjs-utils';


@Component({
  selector: 'app-arquivos',
  templateUrl: './arquivos.component.html',
  styleUrls: ['./arquivos.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ArquivosComponent implements OnInit {

  @ViewChild('filesName') filesName: ElementRef;

  public files: Set<File>;
  public progress: number;

  private arquivos: NgxFileDropEntry[];

  constructor(
    private renderer: Renderer2,
    private arquivosService: ArquivosService,
    private messageModalService: MessageModalService,
    private utilsService: UtilsService
  ) {
    this.arquivos = [];
    this.files = new Set();
    this.progress = 0;
  }

  ngOnInit() {
  }

  public dropped(files: NgxFileDropEntry[]) {
    this.arquivos = files;
    this.setFilesNames();
    for (const droppedFile of files) {
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => this.files.add(file));
      }
    }
  }

  private setFilesNames(): void {
    if (this.arquivos && this.arquivos.length) {
      const names: string[] = [];
      this.arquivos.forEach((arquivo: NgxFileDropEntry) => 
        names.push(arquivo.fileEntry.name)
      );
      this.renderer.setProperty(this.filesName.nativeElement, 'innerText', names.join(', '));
    }
  }

  private setFile(file: File): void {
    this.files.add(file);
  }

  public uploadFile(): void {
    if (this.files && this.files.size) 
      this.arquivosService.upload(this.files).pipe(
        uploadProgress((progress: number) => this.progressUpload(progress)),
        filterResponse()
      )
      .subscribe(
        () => this.showPopupSuccess(),
        () => this.showPopupError()
      );
  }

  private progressUpload(progress: number): void {
    this.progress = progress;
  }

  private showPopupError(): void {
    this.messageModalService.openModalError('Ocorreu um erro ao enviar o arquivo, por favor tente mais tarde.');
  }

  private showPopupSuccess(): void {
    this.messageModalService.openModalSuccess('Arquivo enviado com sucesso!');
    this.files.clear();
    this.renderer.setProperty(this.filesName.nativeElement, 'innerText', 'Selecione ou arraste um arquivo ou mais.');
    setTimeout(() => this.progress = 0, 3000);
  }

  public downloadFile(): void {
    this.arquivosService.getBlob()
    .subscribe((response) => this.arquivosService.downloadFile(response, 'Vídeo.mp4'));
  }
}
