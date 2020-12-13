import { Component } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent {

  public titlePage: string;

  constructor (
    private router: Router
  ) {
    this.getTitlePage();
  }

  private getTitlePage(): void {
    this.router.events.forEach(event => {
      if (event instanceof ActivationEnd && event.snapshot.component && event.snapshot.data)
        this.titlePage = event.snapshot.data.titlePage;
    });
  }

}
