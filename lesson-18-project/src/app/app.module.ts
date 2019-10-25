import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LogFormComponent } from './components/log-dashboard/log-form/log-form.component';
import { LogsComponent } from './components/log-dashboard/logs/logs.component';
import { LogService } from './services/log.service';
import { AppRoutingModule } from "./app-routing.module";
import { AuthService } from "./services/auth.service";
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LogDashboardComponent } from './components/log-dashboard/container/log-dashboard/log-dashboard.component';
import {NotFoundComponent} from "./not-found.component";


@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FlashMessagesModule.forRoot()
  ],
  declarations: [ 
    AppComponent,
    NavbarComponent,
    LogFormComponent,
    LogsComponent,
    LoginComponent,
    RegisterComponent,
    LogDashboardComponent,
    NotFoundComponent
  ],
  providers: [
    LogService,
    AuthService
  ],
  bootstrap: [ 
    AppComponent
  ]
})
export class AppModule { }
