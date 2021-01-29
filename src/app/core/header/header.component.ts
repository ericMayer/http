import { Location } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Output() openMenu: EventEmitter<boolean> = new EventEmitter();

  public showArrowBack: boolean;
  public titlePage: string;

  constructor(
    private router: Router,
    private location: Location
  ) {
    this.getMenu();
  }

  public getMenu(): void {
    this.showArrowBack = false;
    this.titlePage = '';
    this.router.events.forEach(event => {
      if (event instanceof ActivationEnd && event.snapshot.data) {
        if (event.snapshot.data.titlePage) {
          this.titlePage = event.snapshot.data.titlePage;
          this.setShowArrowBack();
        }
      } 
    });
  }

  private setShowArrowBack(): void {
    this.showArrowBack = true;
  }

  public back(): void {
    this.location.back();
    this.getMenu();
  }
}
