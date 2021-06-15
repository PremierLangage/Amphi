import { Component, HostListener } from '@angular/core';
import { Presentation, Slide } from '../models/presentation';
import { MatSnackBar } from '@angular/material/snack-bar';
import { slides } from '../../pl-assets/processed.json';

export enum KeyCode {
  LEFT = 37, // LEFT_ARROW
  RIGHT = 39, // RIGHT_ARROW
  DOWN = 40, // DOWN_ARROW
  UP = 38, // UP_ARROW

  SWITCH = 9, // TAB
  FOCUS = 70, // F
  UNDO = 90, // Z
  MUTE = 77, // M
  CAM = 76, // L
}

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.scss']
})
export class InterfaceComponent {
  prof_view : boolean = true;
  presentation !: Presentation;

  constructor(private _snackBar: MatSnackBar) {
    this.presentation = new Presentation(
      "Titre du cours", this.parsedSlides()
    );
    // this.presentation.currentSlide = 8;
  }

  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    switch (event.keyCode) {
      case KeyCode.SWITCH:
        this.showViewSnackBar();
        this.prof_view = !this.prof_view;
        break;
      default:
        console.log(event);
    }
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

  parsedSlides() : Slide[] {
    var parsedSlides :  Slide[] = [];

    for (let n = 0; n < slides.length; n++) {
      parsedSlides.push(new Slide("Slide " + n, slides[n]))
    }
    return parsedSlides;
  }
}
