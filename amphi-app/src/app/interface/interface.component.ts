import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.scss']
})
export class InterfaceComponent implements OnInit {
  prof_view : boolean = true;

  constructor(private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
  }

  showViewSnackBar() {
    let snackBarRef = this._snackBar.open(
      "Vous êtes passé en vue " + (!this.prof_view ? "prof" : "élève") + ".",
      "Annuler",
      { duration: 3500 }
    );

    snackBarRef.onAction().subscribe(() => {
      this.prof_view = !this.prof_view;
    });
  }
}
