import { Component, OnInit } from '@angular/core';

import { LogService } from '../log.service';
import { Log } from '../log.interface';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor( private logService: LogService ) { }

  ngOnInit() { }

}