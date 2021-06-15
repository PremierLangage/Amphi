import { Component, Input, HostListener } from '@angular/core';
import { ExerciceService } from '../../exercice.service';
import { Presentation, Slide } from 'src/app/models/presentation';
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

  // front
  controlPanelHidden: boolean = false;
  slideMenuHidden: boolean = true;
  hoverSlide: boolean = false;
  hoverMute: boolean = false;
  hoverCam: boolean = false;

  muted: boolean = false;
  camOff: boolean = true;
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
      case KeyCode.UP:
        this.controlPanelHidden = false;
        break;
      case KeyCode.DOWN:
        this.toggleControlPanel();
        break;

      case KeyCode.MUTE:
        this.toggleMute();
        break;
      case KeyCode.CAM:
        this.toggleCam();
        break;

      case KeyCode.UNDO:
        this.presentation.revertLastRevealedSlide();
        break;
      case KeyCode.FOCUS:
        this.toggleFocusMode();
        break;
    }
  }

  hoverOnMute() {
    this.hoverMute = true;
  }

  hoverOffMute() {
    this.hoverMute = false;
  }

  hoverOnCam() {
    this.hoverCam = true;
  }

  hoverOffCam() {
    this.hoverCam = false;
  }

  hoverOnSlide() {
    this.hoverSlide = true;
  }

  hoverOffSlide() {
    this.hoverSlide = false;
  }

  toggleMute() {
    this.muted = !this.muted;
  }

  toggleCam() {
    this.camOff = !this.camOff;
  }

  currentSlide() : Slide {
    return this.presentation.currentSlide();
  }

  nextSlide() : Slide {
    return this.presentation.nextSlide();
  }

  navigateBackwards() {
    this.presentation.setToPreviousSlide();
  }

  navigateForward() {
    this.presentation.setToNextSlide();
  }

  navigateToNthSlide(n: number) {
    if (n > this.presentation.lastRevealedSlide) return;
    this.presentation.setToNthSlide(n);
  }

  toggleFocusMode() {
    this.forceFocusMode = !this.forceFocusMode;
    this.showFocusModeSnackBar()
  }

  toggleSlideMenu() {
    this.slideMenuHidden = !this.slideMenuHidden;
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
