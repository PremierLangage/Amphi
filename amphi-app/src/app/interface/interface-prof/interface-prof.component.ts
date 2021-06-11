import { Component, Input, HostListener } from '@angular/core';
import { ExerciceService } from '../../exercice.service';
import { Presentation } from 'src/app/models/presentation';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Exercice } from '../../models/exercices';
import { KeyCode } from '../interface.component';

@Component({
  selector: 'app-interface-prof',
  templateUrl: './interface-prof.component.html',
  styleUrls: ['./interface-prof.component.scss']
})
export class InterfaceProfComponent {
  @Input() presentation!: Presentation;

  controlPanelHidden: boolean = false;
  forceFocusMode: boolean = false;
  exercices: Exercice[] = new ExerciceService().getExercices();
  profName: String = "Zipstein";

  constructor(private _snackBar: MatSnackBar) {}

  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    switch (event.keyCode) {
      case KeyCode.LEFT:
        this.navigateBackwards();
        break;
      case KeyCode.RIGHT:
        this.navigateForward();
        break;
      case KeyCode.UNDO:
        this.presentation.revertLastRevealedSlide();
        break;
      case KeyCode.FOCUS:
        this.toggleFocusMode();
        break;
    }
  }

  navigateBackwards() {
    this.presentation.setToPreviousSlide();
  }

  navigateForward() {
    this.presentation.setToNextSlide();
  }

  toggleFocusMode() {
    this.forceFocusMode = !this.forceFocusMode;
    this.showFocusModeSnackBar()
  }

  toggleControlPanel() {
    this.controlPanelHidden = !this.controlPanelHidden;
  }

  showFocusModeSnackBar() {
    if (!this.forceFocusMode) return;

    let snackBarRef = this._snackBar.open(
      "L'Amphi est en mode 'Focus' pour tous les élèves.",
      "Annuler", {
        duration: 4500
      }
    );

    snackBarRef.onAction().subscribe(() => {
      this.toggleFocusMode();
    });
  }
}
