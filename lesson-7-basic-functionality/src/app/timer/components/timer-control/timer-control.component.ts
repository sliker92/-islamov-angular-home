import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-timer-control',
  templateUrl: './timer-control.component.html',
  styleUrls: ['./timer-control.component.css']
})
export class TimerControlComponent {

  @Output()
  edit: EventEmitter<number> = new EventEmitter();

  timer:number;
  number:number = 0;
  
  constructor() { }

  startTimer() {
    this.timer = setInterval(() => {
      this.edit.emit(this.number);
      this.number++;
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.timer)
  }
}