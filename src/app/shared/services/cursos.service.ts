import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { Curso } from '../interfaces/curso.interface';
import { HttpService } from '../services/http.service';
@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor(
    private http: HttpService
  ) { }

  public getCursos(): Observable<Curso[]> {
    return this.http.get('cursos');
  }

  public getCursoById(idCurso: string): Observable<Curso> {
    if (idCurso) return this.http.get(`cursos/${idCurso}`).pipe(take(1));
  }

  public criarCurso(curso: Curso): Observable<Curso> {
    if (curso) return this.http.post(`cursos`, curso).pipe(take(1));
  }

  public editarCurso(curso: Curso): Observable<Curso> {
    if (curso) return this.http.put(`cursos`, curso).pipe(take(1));
  }

}
