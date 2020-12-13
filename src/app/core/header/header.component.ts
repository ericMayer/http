import { Location } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() openMenu: EventEmitter<boolean> = new EventEmitter();

  public icon: string;
  public text: string;
  public showMenu: boolean;

  constructor(
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {
    this.getMenu();
  }

  public getMenu(): void {
    this.router.events.forEach(event => {
      if (event instanceof ActivationEnd && event.snapshot.component && event.snapshot.data) {
        this.icon = event.snapshot.data.icon;
        this.text = event.snapshot.data.text;
        if (event.snapshot.data.icon) this.showArrowBackOrMenu(event.snapshot.data.icon);
      } 
    });
  }

  public showArrowBackOrMenu(icon: string): void {
    this.showMenu = icon === 'menu';
  }

  public back(): void {
    this.location.back();
  }
}
