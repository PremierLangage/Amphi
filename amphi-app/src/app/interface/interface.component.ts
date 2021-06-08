import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { slides } from '../../pl-assets/processed.json';
import { Presentation } from '../models/presentation';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.scss']
})
export class InterfaceComponent {
  prof_view : boolean = true;
  current_page : number = 0;
  presentation !: Presentation;

  constructor(private _snackBar: MatSnackBar) {
    this.presentation = new Presentation(
      "Titre du cours", slides
    );
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
