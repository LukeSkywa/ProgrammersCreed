
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { ListSerieComponent } from './components/list-serie/list-serie.component';
import { ModificaprofiloComponent } from './components/modificaprofilo/modificaprofilo.component';
import { CardsComponent } from './components/cards/cards.component';
import { DettaglioComponent } from './components/dettaglio/dettaglio.component';



const routes: Routes = [ 
  {path: 'login', component: LoginComponent},
  {path: 'signin', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'feedback', component: FeedbackComponent},
  {path: 'list', component: ListSerieComponent},
  {path: 'cards',  component:CardsComponent},
  {path: 'modificaProfilo', component: ModificaprofiloComponent},
  {path: 'dettaglio', component: DettaglioComponent},
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
