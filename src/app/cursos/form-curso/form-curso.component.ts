import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { Arquivo } from '../../shared/interfaces/arquivo.interface';
import { Curso } from '../../shared/interfaces/curso.interface';
import { CursosService } from '../../shared/services/cursos.service';
import { Error } from '../../shared/interfaces/error.interface';
import { ErrosUtils } from '../../shared/utils/erros-utils.class';
import { MessageModalService } from '../../shared/services/message-modal.service';
import { UtilsService } from '../../shared/services/utils.service';

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
    private cursosService: CursosService,
    private messageModalService: MessageModalService,
    private utilsService: UtilsService
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
    return !this.curso || !this.curso.nome || (this.curso && this.curso.nome &&this.curso.nome.length < 4) || !this.curso.descricao || (this.curso && this.curso.descricao && this.curso.descricao.length < 30) || !this.curso.cargaHoraria || !this.curso.preco;
  }

  public getTextButton(): string {
    return this.idCurso ? 'Alterar' : 'Cadastrar';
  }

  public saveCurso(): void {
    this.curso.cargaHoraria = Number(this.curso.cargaHoraria);
    if (this.idCurso) this.editarCurso();
    else this.criarCurso();
  }

  private editarCurso(): void {
    this.cursosService.editarCurso(this.curso).subscribe(() => 
      this.showSnackBar('O curso foi atulizado com sucesso!', true)
    , () =>  this.showSnackBar('Ocorreu um erro ao atualizar o curso, por favor tente mais tarde.', false, true));
  }

  private criarCurso(): void {
    this.cursosService.criarCurso(this.curso).subscribe(() => 
      this.showSnackBar('O curso foi criado com sucesso!', true)
    ), () => this.showSnackBar('Ocorreu um erro ao criar o curso, por favor tente mais tarde.', false, true);
  }

  private showSnackBar(message: string, back: boolean, error?: boolean): void {
    if (error) this.messageModalService.openModalError(message);
    else this.messageModalService.openModalSuccess(message);
    if (back) this.utilsService.goTo('cursos');
  } 

  public receiveImage(arquivo: Arquivo): void {
    if (this.curso)
      this.curso.arquivo = arquivo;
  }
}
