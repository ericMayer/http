import { Component, Input } from '@angular/core';
import { Curso } from '../../shared/interfaces/curso.interface';

@Component({
  selector: 'app-card-cursos',
  templateUrl: './card-cursos.component.html',
  styleUrls: ['./card-cursos.component.scss']
})
export class CardCursosComponent {

  @Input() curso: Curso;
}
