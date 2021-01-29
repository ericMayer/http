import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { Bibliotecas } from '../interfaces/bibliotecas.interface';


@Injectable({
  providedIn: 'root'
})
export class BibliotecasService {

  private readonly url = 'https://api.cdnjs.com/libraries';

  constructor(
    private http: HttpClient
  ) { }

  public searchByName(text?: string): Observable<Bibliotecas> {
    const fields = 'name,description,version,homepage';
    let params = new HttpParams();
    params = params.set('search', text || '');
    params = params.set('fields', fields); 
    
    return this.http.get<Bibliotecas>(this.url, { params }).pipe(take(1));
  }
}
