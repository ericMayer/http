import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Menu } from '../interfaces/menu.interface';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  public titlePage: String;
  
  constructor(
    private http: HttpClient
  ) { }

  public getMenu(): Observable<Menu[]> {
    return this.http.get<Menu[]>('./assets/json/menu.json');
  }
} 
