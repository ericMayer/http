import { Component, EventEmitter, Output} from '@angular/core';
import { take } from 'rxjs/operators';

import { Menu } from '../../shared/interfaces/menu.interface';
import { MenuService } from '../../shared/services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  @Output() openMenu: EventEmitter<boolean> = new EventEmitter();

  public menu: Menu[];


  constructor(
    private menuService: MenuService
  ) {
  }

  public ngOnInit(): void {
    this.getMenu();
  }

  public getMenu(): void {
    this.menuService.getMenu()
      .pipe(take(1))
      .subscribe((menu: Menu[]) => this.menu = menu);
  }
}
