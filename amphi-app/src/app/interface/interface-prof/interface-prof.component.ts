import { Component, Input } from '@angular/core';
import { ExerciceService } from '../../exercice.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Exercice } from '../../models/exercices';
import { Presentation } from 'src/app/models/presentation';

@Component({
  selector: 'app-interface-prof',
  templateUrl: './interface-prof.component.html',
  styleUrls: ['./interface-prof.component.scss']
})
export class InterfaceProfComponent {
  @Input() presentation !: Presentation;

  controlPanelHidden : boolean = false;
  forceFocusMode : boolean = false;
  exercices : Exercice[] = new ExerciceService().getExercices();
  profName : String = "Zipstein";

  constructor(private _snackBar: MatSnackBar) {
  }

  navigateBackwards() {
    this.presentation.setToPreviousSlide();
  }

  navigateForward() {
    this.presentation.setToNextSlide();
  }

  toggleFocusMode() {
    this.forceFocusMode = !this.forceFocusMode;
  }

  toggleControlPanel() {
    this.controlPanelHidden = !this.controlPanelHidden;
  }

  showFocusModeSnackBar() {
    if (!this.forceFocusMode) return;

    let snackBarRef = this._snackBar.open(
      "L'Amphi est en mode 'Focus' pour tous les élèves.",
      "Annuler",
      { duration: 4500 }
    );

    snackBarRef.onAction().subscribe(() => {
      this.toggleFocusMode();
    });
  }
}
