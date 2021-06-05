import { Component, OnInit } from '@angular/core';
import { ExerciceService } from '../../exercice.service';
import { Exercice } from '../../models/exercices';
import { interval } from 'rxjs';

@Component({
  selector: 'app-interface-prof',
  templateUrl: './interface-prof.component.html',
  styleUrls: ['./interface-prof.component.scss']
})
export class InterfaceProfComponent implements OnInit {
  controlPanelHidden : boolean = false;
  currentSeconds = new Date().toLocaleTimeString().split(":").pop();
  currentTime : String = new Date().toLocaleTimeString().slice(0, -3);
  exercices : Exercice[] = new ExerciceService().getExercices();
  profName : String = "Zipstein";

  updateTime = interval(1000).subscribe(
    () => { this.currentTime = new Date().toLocaleTimeString().slice(0, -3); }
  );

  updateSeconds = interval(1000).subscribe(
    () => { this.currentSeconds = new Date().toLocaleTimeString().split(":").pop(); }
  );

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleControlPanel() {
    this.controlPanelHidden = !this.controlPanelHidden;
    console.log(this.controlPanelHidden);
  }
}
