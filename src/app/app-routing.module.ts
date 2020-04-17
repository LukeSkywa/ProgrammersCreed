import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import * as core from '@angular/core';


const routes: Routes = [ 
  {path: 'login', component: LoginComponent},
  {path: 'signin', component: RegisterComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'}
];

@core.NgModule({
  imports: [
      RouterModule.forRoot(routes)
  ],
  exports: [
      RouterModule
  ]
})
export class RoutingModule{ }
