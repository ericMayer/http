import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Menu } from '../interfaces/menu.interface';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  
  constructor(
    private http: HttpClient
  ) { }

  public getMenu(): Observable<Menu[]> {
    return this.http.get<Menu[]>('./assets/json/menu.json');
  }
} 