import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.scss']
})
export class InterfaceComponent implements OnInit {
  prof_view : boolean = true;

  constructor() {
  }

  ngOnInit(): void {
  }
}
