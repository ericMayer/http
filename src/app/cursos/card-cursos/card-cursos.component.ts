import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Curso } from '../../shared/interfaces/curso.interface';

@Component({
  selector: 'app-card-cursos',
  templateUrl: './card-cursos.component.html',
  styleUrls: ['./card-cursos.component.scss']
})
export class CardCursosComponent {

  @Input() curso: Curso;
  @Output() editarCurso: EventEmitter<string> = new EventEmitter();


  public editar(id: String): void {
    if (id) this.editarCurso.emit(`cursos/editar-curso/${id}`)
  }

}
