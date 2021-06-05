import { ExitDialogComponent } from '../interface/exit-dialog/exit-dialog.component';
import { Component, OnInit } from '@angular/core';
import { ExerciceService } from '../exercice.service';
import { MatDialog } from '@angular/material/dialog';
import { Exercice } from '../models/exercices';
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

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  openDialog(): void {
    this.dialog.open(ExitDialogComponent, { width: '350px' });
  }

  onKeypressEvent(event: any){
    console.log(event.target.value);
  }

  toggleControlPanel() {
    this.controlPanelHidden = !this.controlPanelHidden;
    console.log(this.controlPanelHidden);
  }
}
