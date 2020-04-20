
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { ModificaprofiloComponent } from './components/modificaprofilo/modificaprofilo.component';





const routes: Routes = [ 
  {path: 'login', component: LoginComponent},
  {path: 'signin', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'feedback', component: FeedbackComponent},
  {path: 'modificaProfilo', component: ModificaprofiloComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes)
  ],
  exports: [
      RouterModule
  ]
})
export class AppRoutingModule{ }
