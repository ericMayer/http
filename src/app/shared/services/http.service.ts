import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { API } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  public get<T>(endPoint: string): Observable<T> {
    return this.http.get<T>(`${API}/${endPoint}`);
  }

  public post<T>(endPoint: string, body: any): Observable<T> {
    return this.http.post<T>(`${API}/${endPoint}`, body);
  }

  public put<T>(endPoint: string, body: any): Observable<T> {
    return this.http.put<T>(`${API}/${endPoint}`, body);
  }
}
