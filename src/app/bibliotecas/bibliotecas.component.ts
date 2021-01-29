import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { BibliotecasService } from '../shared/services/bibliotecas.service';
import { TranslateService } from'../shared/services/translate.service';

import { Bibliotecas } from '../shared/interfaces/bibliotecas.interface';
import { MatTableDataSource } from '@angular/material/table';
import { Biblioteca } from '../shared/interfaces/biblioteca.interface';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-bibliotecas',
  templateUrl: './bibliotecas.component.html',
  styleUrls: ['./bibliotecas.component.scss']
})
export class BibliotecasComponent implements OnInit, AfterViewInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  

  public bibliotecas: Bibliotecas;
  public dataSource: MatTableDataSource<Biblioteca>;
  public columns: string[];
  public search: FormControl;

  constructor(
    private bibliotecasService: BibliotecasService,
    private translateService: TranslateService
  ) { 
    this.initVariables();
  }

  ngOnInit() {
    this.getBibliotecas();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.translateService.translatePaginator(this.dataSource.paginator);
  }

  private initVariables(): void {
    this.columns = ['nome', 'versão'];
    this.bibliotecas = { results: [] };
    this.search = new FormControl();
    this.dataSource = new MatTableDataSource();
  }

  private getBibliotecas(): void {
    this.bibliotecasService.searchByName().subscribe((bibliotecas: Bibliotecas) => {
      this.bibliotecas = bibliotecas;
      this.dataSource.data = bibliotecas.results;
    });
  }

  public getTextSearch(): void {
    console.log(this.search);
  }
}

