import {Component, EventEmitter, Output} from '@angular/core';
import {User} from "../user.interface";


@Component({
  selector: 'app-form-app',
  templateUrl: './form-app.component.html',
  styleUrls: ['./form-app.component.css']
})

export class FormAppComponent {

  @Output()
  update: EventEmitter<User> = new EventEmitter<User>();

  userExample: User = {
    userData: {
      userName: '',
      email: ''
    },
    secretQuestion: ['Mother second name', "Pet's name", "You'r first nickname"],
    answerQuestion: '',
    gender: ['Male', 'Female']
  };

  proposeUser(nameInput): string {
    return nameInput.value = 'John Wick';
  }

  onSubmit(user: User, isValid: boolean) {
    if (isValid) {
      this.update.emit(user);
    }
  }
}
