import { Injectable } from '@angular/core';

import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {

  constructor() { }

  public translatePaginator(paginator: MatPaginator): void {
    paginator._intl.itemsPerPageLabel = 'Itens por página';
    paginator._intl.nextPageLabel = 'Próxima paǵina';
    paginator._intl.previousPageLabel = 'Página anterior';
    paginator._intl.lastPageLabel = 'Última página';
    paginator._intl.firstPageLabel = 'Primeira página';
    paginator._intl.getRangeLabel = 
      (page: number, pageSize: number, length: number) =>
      `${page * pageSize + 1} - ${page * pageSize + pageSize} de ${length}`;
  }
}