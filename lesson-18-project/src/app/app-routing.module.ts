import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';
import { RegisterGuard } from './guards/register.guard';
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {LogDashboardComponent} from "./components/log-dashboard/container/log-dashboard/log-dashboard.component";
import {NotFoundComponent} from "./not-found.component";

const routes: Routes = [
  {path: '', component: LogDashboardComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent, canActivate: [RegisterGuard]},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthGuard,
    RegisterGuard
  ]
})
export class AppRoutingModule {
}
