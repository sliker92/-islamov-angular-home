import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { formatDate } from '@angular/common';

import { LogService } from '../log.service';
import { Log } from '../log.interface';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})

export class LogFormComponent implements OnInit {

  @Output()
  loged: EventEmitter<Log> = new EventEmitter();

  text: string;
  newLog: Log;

  constructor( private logService: LogService ) { }

  ngOnInit() { }

  clear() {
    this.text = '';
  }

  onSubmit(event) {
    this.newLog = {
      id: '1',
      text: this.text,
      date: formatDate(new Date(), 'd.MM.yy HH:mm', 'en')
    }
  }
}
