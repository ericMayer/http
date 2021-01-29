import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ArquivosService {

  constructor(
    private http: HttpClient
  ) { }

  public upload(files: Set<File>): Observable<HttpEvent<Object>> {
    if (files && files.size) {
      const formData = new FormData();
      files.forEach((file: File) => {
        console.log(file);
        formData.append('file', file, file.name);
      });
      return this.http.post<HttpEvent<Object>>('/api/upload', formData, {
        observe: 'events',
        reportProgress: true
      });
    }
  }

  public getBlob(): Observable<any> {
    return this.http.get('/api/download', {
      responseType: 'blob' as 'json',

    })
  }

  public downloadFile(blob: any, fileName: string): void {
    if (window.navigator.msSaveOrOpenBlob)
      window.navigator.msSaveOrOpenBlob(blob);

    else {
      const a = document.createElement('a');
      a.href = window.URL.createObjectURL(blob);
      a.download = fileName;

      a.dispatchEvent(new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
      }));

      setTimeout(() => {
        window.URL.revokeObjectURL(blob);
        a.remove();
      }, 100);
    }
  }
}
