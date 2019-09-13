import { Component} from '@angular/core';

@Component({
  selector: 'app-timer-dashboard',
  templateUrl: './timer-dashboard.component.html',
  styleUrls: ['./timer-dashboard.component.css']
})
export class TimerDashboardComponent {

  constructor() { }

  arrayNumber: number[] = [];

  handleEdit(event) {
    this.arrayNumber.push(event); 
  }
}