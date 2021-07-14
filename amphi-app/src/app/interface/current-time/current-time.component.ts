import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'current-time',
  templateUrl: './current-time.component.html',
  styleUrls: ['./current-time.component.scss']
})
export class CurrentTimeComponent {
  currentSeconds = new Date().toLocaleTimeString().split(":").pop();
  currentTime : String = new Date().toLocaleTimeString().slice(0, -3);

  updateTime = interval(1000).subscribe(
    () => { this.currentTime = new Date().toLocaleTimeString().slice(0, -3); }
  );

  updateSeconds = interval(1000).subscribe(
    () => { this.currentSeconds = new Date().toLocaleTimeString().split(":").pop(); }
  );
}
