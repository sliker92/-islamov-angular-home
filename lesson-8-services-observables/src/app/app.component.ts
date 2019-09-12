import { Component } from '@angular/core';
import { UsersService } from './services/users.service'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  providers: [ UsersService ]
})

export class AppComponent { }
