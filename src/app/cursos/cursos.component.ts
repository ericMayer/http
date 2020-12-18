import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { EmptyObservable } from 'rxjs/observable/EmptyObservable';

import { Curso } from '../shared/interfaces/curso.interface';
import { CursosService } from '../shared/services/cursos.service';
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
          return EmptyObservable.create<Curso[]>();
        })
      );
  }

  public goTo(path: string): void {
    this.utilsService.goTo(path);
  }
}