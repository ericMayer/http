import { Component, OnInit } from '@angular/core';
import { Curso } from '../shared/interfaces/curso.interface';

import { CursosService } from '../shared/services/cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {  

  public cursos: Curso[];

  constructor(
    private cursosService: CursosService
  ) { 
  }

  ngOnInit(): void {
    this.getCursos();
  }

  public getCursos(): void {
    this.cursosService.getCursos()
      .subscribe((cursos: Curso[]) => this.cursos = cursos);
  }
}
