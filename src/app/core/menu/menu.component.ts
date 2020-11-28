import { Component} from '@angular/core';

import { Menu } from '../../shared/interfaces/menu.interface';
import { MenuService } from '../../shared/services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  public menu: Menu[];


  constructor(
    private menuService: MenuService
  ) {
  }

  public ngOnInit(): void {
    this.getMenu();
  }

  public getMenu(): void {
    this.menuService.getMenu().subscribe((menu: Menu[]) => this.menu = menu);
  }
}
