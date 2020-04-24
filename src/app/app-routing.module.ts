
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
import { RouteGuardsPagesService } from './services/route-guards-pages.service';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DettaglioComponent } from './components/dettaglio/dettaglio.component';
import { HomeComponent } from './components/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModificaImmagineComponent } from './components/modifica-immagine/modifica-immagine.component';
import { MansonryComponent } from './components/mansonry/mansonry.component';



const routes: Routes = [ 
  {path: 'cards', component: MansonryComponent,canActivate: [RouteGuardsLoginRegisterService]},
  {path: 'login', component: LoginComponent, canActivate: [RouteGuardsPagesService]},
  {path: 'signin', component: RegisterComponent, canActivate: [RouteGuardsPagesService]},
  {path: 'profile', component: ProfileComponent, canActivate: [RouteGuardsLoginRegisterService]},
  {path: 'feedback', component: FeedbackComponent, canActivate: [RouteGuardsLoginRegisterService]},
  {path: 'list', component: ListSerieComponent, canActivate: [RouteGuardsLoginRegisterService]},
  {path: 'list/:filtro', component: ListSerieComponent, canActivate: [RouteGuardsLoginRegisterService]},
  {path: 'mansonry',  component:CardsComponent, canActivate: [RouteGuardsLoginRegisterService]},
  {path: 'modificaProfilo', component: ModificaprofiloComponent, canActivate: [RouteGuardsLoginRegisterService]},
  {path: 'dettaglio/:id', component: DettaglioComponent, canActivate: [RouteGuardsLoginRegisterService]},
  {path: 'home', component: HomeComponent, canActivate: [RouteGuardsLoginRegisterService]},
  {path: 'modificaImmagine', component: ModificaImmagineComponent, canActivate: [RouteGuardsLoginRegisterService]},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  { path:'**',component: PageNotFoundComponent }
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes),
  ],
  exports: [
      RouterModule
  ]
})
export class AppRoutingModule{ }
