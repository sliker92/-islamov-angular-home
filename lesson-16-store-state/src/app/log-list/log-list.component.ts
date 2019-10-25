import { Component, OnInit, Input } from '@angular/core';

import { LogService } from '../log.service';
import { Log } from '../log.interface';

@Component({
  selector: 'app-log-list',
  templateUrl: './log-list.component.html',
  styleUrls: ['./log-list.component.css']
})
export class LogListComponent implements OnInit {

  constructor( private logService: LogService ) { }

  ngOnInit() { }
}