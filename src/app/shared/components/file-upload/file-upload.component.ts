import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

import { FileSystemFileEntry, NgxFileDropEntry } from 'ngx-file-drop';

import { Arquivo } from '../../interfaces/arquivo.interface';
@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FileUploadComponent {

  public files: NgxFileDropEntry[] = [];

  @Input() imageUrl: string | ArrayBuffer;
  @Output() emitImage: EventEmitter<Arquivo> = new EventEmitter();


  constructor(
  ) {
  }

  public dropped(files: NgxFileDropEntry[]): void {
    this.files = files;
    for (const droppedFile of files) {
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        const reader = new FileReader();

        fileEntry.file((file: File) => {
          reader.readAsDataURL(file);
          reader.onload = () => {
            this.imageUrl = reader.result;
            this.sendFileSelected(file, reader.result);
          }
        });
      }
    }
  }

  private sendFileSelected(file: File, image: string | ArrayBuffer): void {
    const arquivo: Arquivo = { name: file.name, size: file.size, type: file.type, upload: new Date(), image: image };
    this.emitImage.emit(arquivo);
  }
}
