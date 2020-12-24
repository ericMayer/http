import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Dialog } from '../../interfaces/dialog.interface';

@Component({
  selector: 'app-popup-confirmacao',
  templateUrl: './popup-confirmacao.component.html',
  styleUrls: ['./popup-confirmacao.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PopupConfirmacaoComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Dialog
  ) { }

  ngOnInit() {
  }

}
