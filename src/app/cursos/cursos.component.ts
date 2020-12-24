import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { EMPTY, Observable, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Curso } from '../shared/interfaces/curso.interface';
import { CursosService } from '../shared/services/cursos.service';
import { PopupConfirmacaoComponent } from '../shared/components/popup-confirmacao/popup-confirmacao.component';
import { MessageModalService } from '../shared/services/message-modal.service';
import { UtilsService } from '../shared/services/utils.service';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  public cursos: Observable<Curso[]>;
  public error: Subject<boolean> = new Subject();
  public isErrorLoadCursos: boolean;

  constructor(
    private cursosService: CursosService,
    private messageModalService: MessageModalService,
    private utilsService: UtilsService,
    private matDialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.getCursos();
  }

  public getCursos(): void {
    this.cursos = this.cursosService.getCursos()
      .pipe(
        catchError(() => {
          this.isErrorLoadCursos = true;
          this.messageModalService.openModalError('Ocorreu um erro ao carregar os cursos, por favor tente novamente mais tarde.');
          return EMPTY;
        })
      );
  }

  public goTo(path: string): void {
    this.utilsService.goTo(path);
  }

  public showPopupDeletar(id: string): void {
    this.matDialog.open(PopupConfirmacaoComponent, {
      data: {
        title: 'Exclusão de Curso',
        message: 'Têm certeza que quer excluir o curso? Essa ação não pode ser desfeita.',
        cancel: 'Voltar',
        confirm: 'Excluir'
      },
      panelClass: 'popup-confirmacao'
    })
      .afterClosed().subscribe((response: boolean) => this.deletarCurso(response, id));
  }

  private deletarCurso(isDelete: boolean, id: string): void {
    if (isDelete)
      this.cursosService.deletarCurso(id).subscribe(
        () => { 
          this.messageModalService.openModalSuccess('O curso foi deletado com sucesso!');
          this.getCursos();
        },
        () =>  this.messageModalService.openModalError('Ocorreu um erro ao deletar o curso, por favor tente novamente mais tarde.')
      );
  }
}