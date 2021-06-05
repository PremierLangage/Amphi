import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-interface-eleve',
  templateUrl: './interface-eleve.component.html',
  styleUrls: ['./interface-eleve.component.scss']
})
export default class InterfaceEleveComponent implements OnInit {
  focusMode : boolean = true;

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  toggleFocusMode() {
    this.focusMode = !this.focusMode;
  }

  showFocusModeSnackBar() {
    if (this.focusMode) return;

    let snackBarRef = this._snackBar.open(
      "Tu as quitté le mode 'Focus'.",
      "Revenir au stream",
      { duration: 4500 }
    );

    snackBarRef.onAction().subscribe(() => {
      this.toggleFocusMode();
    });
  }
}
