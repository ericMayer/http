import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Curso } from '../interfaces/curso.interface';
@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor(
    private http: HttpClient
  ) { }

  public getCursos(): Observable<Curso[]> {
    return this.http.get<Curso[]>('http://localhost:3000/cursos');
  }

}
