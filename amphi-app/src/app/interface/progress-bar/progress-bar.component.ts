import { Component, Input } from '@angular/core';

@Component({
  selector: 'progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent {
  @Input() showFull : boolean = false;
  @Input() focusMode : boolean = false;
  @Input() currentPage : number = 0;
  @Input() loadedPages : number = 0;
  @Input() max : number = 0;
}
