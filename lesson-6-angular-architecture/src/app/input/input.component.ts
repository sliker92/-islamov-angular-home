import { Component } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})

export class InputComponent {

  protected defaultName: string = '';

  isValidForm(): boolean {
  let isValid: boolean = false;

  if (this.defaultName.length === 0) {
    isValid = false;
  } else {
    isValid = true;
    }
  
  return isValid;
  }

  handleClick(event) {
    this.defaultName = ''
  }
}