import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

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
    return this.http.get<Bibliotecas>(`${this.url}?fields=name,description,version,homepage&search=${text || ''}`);
  }
}
