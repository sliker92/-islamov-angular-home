import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {
  fromActToInact: number = 1;
  fromInactToAct: number = 1;

  activeStanceCounter(): number {
    console.log(`From Active to Inactive - ${this.fromActToInact}`)
    return this.fromActToInact++;
  }

  inActiveStanceCounter(): number {
    console.log(`From Active to Inactive - ${this.fromInactToAct}`)
    return this.fromInactToAct++;
  }
}