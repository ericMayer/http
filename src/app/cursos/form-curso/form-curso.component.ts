import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { take } from 'rxjs/operators';

import { Curso } from '../../shared/interfaces/curso.interface';
import { CursosService } from '../../shared/services/cursos.service';
import { Error } from '../../shared/interfaces/error.interface';
import { ErrosUtils } from '../../shared/utils/erros-utils.class';

@Component({
  selector: 'app-form-curso',
  templateUrl: './form-curso.component.html',
  styleUrls: ['./form-curso.component.scss']
})

export class FormCursoComponent implements OnInit {

  public curso: Curso;
  private idCurso: string;
  public erros: Error[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private cursosService: CursosService
  ) { 
    this.curso = {};
    this.erros = [];
    this.getIdCurso();
  }

  ngOnInit() {
    this.getCursoById();
  }

  private getIdCurso(): void {
    this.idCurso = this.activatedRoute.snapshot.params['idCurso'];
  }

  private getCursoById(): void {
    if (this.idCurso) {
      this.cursosService.getCursoById(this.idCurso)
        .pipe(take(1))
        .subscribe((curso: Curso) => this.curso = curso);
    }
  }

  public setInvalid(field: string, value: number): void {  
    if(value !== undefined) this.removeError(field);
    else this.setError(field);
  }

  private setError(field: string): void {
    if (this.erros && !this.erros.length)  this.pushError(field);
    else if (ErrosUtils.checkError(this.erros, field)) this.pushError(field);
  }

  private pushError(field: string): void {
    this.erros.push({ field, message: 'Esse campo é obrigatório.'});
  }

  private removeError(field: string): void {
    if (this.erros && this.erros.length && !ErrosUtils.checkError(this.erros, field)) this.erros = ErrosUtils.removeError(this.erros, field);
  }

  public getErrorMessage(field: string): string {
    if (this.erros && this.erros.length) return ErrosUtils.getErrorMessage(this.erros, field);
  }

  public formInvalid(): boolean {
    return !this.curso || !this.curso.nome || !this.curso.descricao || !this.curso.cargaHoraria || !this.curso.preco;
  }
}
