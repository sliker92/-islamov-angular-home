import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { FormValidator } from './form.validator';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent {

  statuses: any = ['Stable', 'Critical', 'Finished']

  form = this.fb.group({
      project: ['',[
        Validators.required,
        FormValidator.checkProjectName
      ]],
      email: ['',[
        Validators.email,
        Validators.required
      ]],
      status: ['', [Validators.required]]
  });

  constructor( public fb: FormBuilder ) { }

  required(name: string) {
    return (
      this.form.get(`${name}`).hasError('required') && 
      this.form.get(`${name}`).touched
    );
  }

  onSubmit() {
    console.log('Submit:', this.form.value);
  }
}