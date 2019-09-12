import { Injectable } from '@angular/core';
import { User } from '../models/user'
import { CounterService } from './counter.service'

@Injectable()
export class UsersService {

  constructor(private counterService: CounterService) { }

  users: User[] = [{
      name: 'Stephen',
      isActive: false
    }, {
      name: 'Adam',
      isActive: true
    }, {
      name: 'John',
      isActive: false
    }, {
      name: 'Mark',
      isActive: false
    }];
  

  setToActive(index) {
    this.users[index].isActive = true;
    return this.counterService.activeStanceCounter();
  }

  setToInactive(index) {
    this.users[index].isActive = false;
    return this.counterService.inActiveStanceCounter();
  }
}