import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, tap } from 'rxjs/operators';

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
export class BibliotecasComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  

  public bibliotecas: Bibliotecas;
  public dataSource: MatTableDataSource<Biblioteca>;
  public columns: string[];
  public search: FormControl;
  public subscription$: Subscription;

  constructor(
    private bibliotecasService: BibliotecasService,
    private translateService: TranslateService
  ) { 
    this.initVariables();
  }

  ngOnInit() {
    this.getBibliotecasBySearch();
    this.searchObserveChanges();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.translateService.translatePaginator(this.dataSource.paginator);
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }

  private initVariables(): void {
    this.columns = ['name', 'version'];
    this.bibliotecas = { results: [] };
    this.search = new FormControl();
    this.dataSource = new MatTableDataSource();
  }

  private searchObserveChanges(): void {
    this.subscription$ = this.search.valueChanges.pipe(
      map((texto: string) => texto.trim()),
      filter((texto: string) => texto && texto.length > 1 || texto === ''),
      debounceTime(300),
      distinctUntilChanged(),
      tap((texto: string) => this.getBibliotecasBySearch(texto)),
    ).subscribe();
  }

  private getBibliotecasBySearch(texto?: string): void {
    this.bibliotecasService.searchByName(texto).subscribe((bibliotecas: Bibliotecas) => {
      this.bibliotecas = bibliotecas;
      this.dataSource.data = bibliotecas.results;
    });
  }

  public getTextSearch(): void {
    if (this.search && this.search.value && this.search.value.length > 1) { 
      this.search.value.trim();
      this.getBibliotecasBySearch(this.search.value);
    }
  }

  public invalidSearch(): boolean {
    return !this.search || !this.search.value || this.search.value.length <= 1;
  }
}

