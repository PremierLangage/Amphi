import { Component, Input } from '@angular/core';
import { Slide } from 'src/app/models/presentation';

@Component({
  selector: 'course-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})

export class SlideComponent {
  @Input() slide !: Slide;
}
