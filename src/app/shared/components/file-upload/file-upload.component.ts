import { Component, ViewEncapsulation } from '@angular/core';

import { FileSystemFileEntry, NgxFileDropEntry } from 'ngx-file-drop';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FileUploadComponent {

  public files: NgxFileDropEntry[] = [];
  public imageUrl: string | ArrayBuffer;


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
          reader.onload = () => this.imageUrl = reader.result;
        });
      }
    }
  }
}
