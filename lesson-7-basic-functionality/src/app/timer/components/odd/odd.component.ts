import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styles: ['span { color: cyan; }']
})
export class OddComponent {
  @Input()
  currentNumber: number;

  constructor() { }
}