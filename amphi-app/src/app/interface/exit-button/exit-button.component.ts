import { ExitDialogComponent } from './exit-dialog/exit-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'exit-button',
  templateUrl: './exit-button.component.html',
  styleUrls: ['./exit-button.component.scss']
})
export class ExitButtonComponent {
  @Input() withTxt : boolean = false;

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    this.dialog.open(ExitDialogComponent, { width: '350px' });
  }
}
