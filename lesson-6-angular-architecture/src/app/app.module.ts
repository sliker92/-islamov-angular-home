import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { InputComponent } from './input/input.component';
import { PhotoComponent } from './photo/photo.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, WarningAlertComponent, SuccessAlertComponent, InputComponent, PhotoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
