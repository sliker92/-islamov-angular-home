import { AbstractControl } from '@angular/forms';

export class FormValidator {
  static checkProjectName(control: AbstractControl) {
    console.log(control)
    if(control.value === 'test') {
      return { checkProjectName: true }
     }
     return null;
  }
}
