import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(
    private router: Router
  ) { }


  public goTo(path: string, value?: string): void {
    if (path) {
      path = value ? `${path}/${value}` : path;
      this.router.navigateByUrl(path);
    }
  }

}
