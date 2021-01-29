import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class MessageModalService {

  constructor(
    private snackBar: MatSnackBar
  ) { }

  private showModal(message: string, className: string): void {
    this.snackBar.open(message, 'Fechar', {
      panelClass: className,
      verticalPosition: 'bottom',
      duration: 3000,  
    });
  }

  public openModalError(message: string): void {
    this.showModal(message, 'snack-bar-error');
  }

  public openModalSuccess(message: string): void {
    this.showModal(message, 'snack-bar-success');
  }
}
