import { Component, Input } from '@angular/core';

@Component({
  selector: 'course-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})

export class SlideComponent {
  @Input() slideContent : string = "";

  constructor() { }
}
