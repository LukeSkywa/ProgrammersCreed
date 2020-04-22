
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { ListSerieComponent } from './components/list-serie/list-serie.component';
import { ModificaprofiloComponent } from './components/modificaprofilo/modificaprofilo.component';
import { CardsComponent } from './components/cards/cards.component';
import { RouteGuardsLoginRegisterService } from './services/route-guards-login-register.service';



const routes: Routes = [ 
  {path: 'login', component: LoginComponent},
  {path: 'signin', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [RouteGuardsLoginRegisterService]},
  {path: 'feedback', component: FeedbackComponent, canActivate: [RouteGuardsLoginRegisterService]},
  {path: 'list', component: ListSerieComponent, canActivate: [RouteGuardsLoginRegisterService]},
  {path: 'cards',  component:CardsComponent, canActivate: [RouteGuardsLoginRegisterService]},
  {path: 'modificaProfilo', component: ModificaprofiloComponent, canActivate: [RouteGuardsLoginRegisterService]},
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
