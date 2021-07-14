import { Component, Input, Output, HostListener, EventEmitter } from '@angular/core';
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
  @Input() presentation !: Presentation;
  @Input() forcedFocusMode !: boolean;
  @Output() focusModeEvent : EventEmitter<boolean> = new EventEmitter<boolean>();

  // front
  controlPanelHidden: boolean = false;
  slideMenuHidden: boolean = true;
  hoverSlide: boolean = false;
  hoverMute: boolean = false;
  hoverCam: boolean = false;

  muted: boolean = false;
  camOff: boolean = true;
  exercices: Exercice[] = new ExerciceService().getExercices();
  profName: string = "Zipstein";

  get currentSlide() : Slide {
    return this.presentation.currentSlide();
  }

  get nextSlide() : Slide {
    return this.presentation.nextSlide();
  }

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
    this.forcedFocusMode = !this.forcedFocusMode;
    this.focusModeEvent.emit(this.forcedFocusMode);
    console.log(this.forcedFocusMode);
    this.showFocusModeSnackBar()
  }

  toggleSlideMenu() {
    this.slideMenuHidden = !this.slideMenuHidden;
  }

  showFocusModeSnackBar() {
    if (!this.forcedFocusMode) return;

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
