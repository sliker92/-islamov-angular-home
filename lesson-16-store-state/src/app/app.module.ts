import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LogListComponent } from './log-list/log-list.component';
import { LogFormComponent } from './log-form/log-form.component';
import { LogService } from './log.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, NavBarComponent, LogListComponent, LogFormComponent ],
  bootstrap:    [ AppComponent ],
  providers: [LogService],
})
export class AppModule { }
