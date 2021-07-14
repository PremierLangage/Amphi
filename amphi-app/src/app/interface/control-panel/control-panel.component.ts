import { Component, Input, HostListener } from '@angular/core';
import { Exercice } from 'src/app/models/exercices';
import { KeyCode } from '../interface.component';

@Component({
  selector: 'control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss']
})
export class ControlPanelComponent {
  @Input() name !: string;
  @Input() hidden : boolean = false;
  @Input() exerciceList : Exercice[] = [];

  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    switch (event.keyCode) {
      case KeyCode.UP:
        this.hidden = false;
        break;
      case KeyCode.DOWN:
        this.toggleHidden();
        break;
    }
  }

  toggleHidden() {
    this.hidden = !this.hidden;
  }
}
