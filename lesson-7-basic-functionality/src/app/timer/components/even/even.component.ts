import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styles: ['span { color: coral; }']
})
export class EvenComponent {
  @Input()
  currentNumber: number;

  constructor() { }
}