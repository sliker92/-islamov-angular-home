import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OddComponent } from './components/odd/odd.component';
import { EvenComponent } from './components/even/even.component';
import { TimerControlComponent } from './components/timer-control/timer-control.component';
import { TimerDashboardComponent } from './containers/timer-dashboard/timer-dashboard.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TimerControlComponent,
    OddComponent,
    EvenComponent,
    TimerDashboardComponent
  ],
  exports: [
    TimerDashboardComponent
  ]
})
export class TimerModule { }