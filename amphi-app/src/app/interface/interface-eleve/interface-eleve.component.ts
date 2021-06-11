import { Component, Input, OnInit, HostListener } from '@angular/core';
import { Presentation } from 'src/app/models/presentation';
import { MatSnackBar } from '@angular/material/snack-bar';
import { KeyCode } from '../interface.component';

@Component({
  selector: 'app-interface-eleve',
  templateUrl: './interface-eleve.component.html',
  styleUrls: ['./interface-eleve.component.scss']
})
export class InterfaceEleveComponent implements OnInit {
  @Input() globalPresentation !: Presentation;
  ownPresentation !: Presentation;

  focusMode : boolean = true;

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit() : void {
    this.ownPresentation = new Presentation(
      this.globalPresentation.title,
      this.globalPresentation.slides
    );
    this.ownPresentation.currentSlide = -1;
  }

  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    switch (event.keyCode) {
      case KeyCode.LEFT:
        this.navigateBackwards();
        break;
      case KeyCode.RIGHT:
        this.navigateForward();
        break;
      case KeyCode.FOCUS:
        this.toggleFocusMode();
        break;
    }
  }

  toggleFocusMode() {
    this.focusMode = !this.focusMode;
    if (this.ownPresentation.currentSlide == -1)
      this.ownPresentation.currentSlide = this.globalPresentation.currentSlide;
    this.showFocusModeSnackBar();
  }

  navigateBackwards() {
    if (this.ownPresentation.isOnFirstSlide()) return;
    this.ownPresentation.setToPreviousSlide();
  }

  navigateForward() {
    if (this.cantGoFurther()) return;
    this.ownPresentation.setToNextSlide();
  }

  cantGoFurther() : boolean {
    // returns true if the presentation is on last slide
    // or if the next slide hasn't been revealed by the teacher yet
    return this.globalPresentation.lastRevealedSlide <= this.ownPresentation.currentSlide || this.ownPresentation.isOnLastSlide()
  }

  currentSlide() : number {
    return (this.focusMode ? this.globalPresentation : this.ownPresentation).currentSlide;
  }

  currentSlideContent() : string {
    return (this.focusMode ? this.globalPresentation : this.ownPresentation).currentSlideContent();
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
