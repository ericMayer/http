import { HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';

import { pipe } from 'rxjs';
import { tap, filter, mapTo } from 'rxjs/operators';


export function filterResponse<T>() {
  return pipe(  
    filter((event: HttpEvent<T>) => event.type === HttpEventType.Response),
    mapTo((response: HttpResponse<T>) => response.body)
  )
} 

export function uploadProgress<T>(callback: (progress: number) => void) {
  return tap((event: HttpEvent<T>) => {
    if (event.type === HttpEventType.UploadProgress)
      callback(Math.round((event.loaded * 100) / event.total));
  });
}