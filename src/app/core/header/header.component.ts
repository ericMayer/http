import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() openMenu: EventEmitter<boolean> = new EventEmitter();

  public titlePage: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.getTitlePage();
  }

  public getTitlePage(): void {
    this.router.events.forEach((event) => {
      if (event instanceof ActivationEnd && event.snapshot.component && event.snapshot.data.titlePage) 
        this.titlePage = event.snapshot.data.titlePage;    
    });
  }

}
