
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { ModificaprofiloComponent } from './components/modificaprofilo/modificaprofilo.component';
import { CardsComponent } from './components/cards/cards.component';
import { RouteGuardsLoginRegisterService } from './services/route-guards-login-register.service';
import { RouteGuardsPagesService } from './services/route-guards-pages.service';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DettaglioComponent } from './components/dettaglio/dettaglio.component';
import { ModificaImmagineComponent } from './components/modifica-immagine/modifica-immagine.component';
import { MansonryComponent } from './components/mansonry/mansonry.component';



const routes: Routes = [ 
  {path: 'signin', component: RegisterComponent, canActivate: [RouteGuardsPagesService]},
  {path: 'profile', component: ProfileComponent, canActivate: [RouteGuardsLoginRegisterService]},
  {path: 'feedback', component: FeedbackComponent, canActivate: [RouteGuardsLoginRegisterService]},
  {path: 'mansonry',  component:CardsComponent, canActivate: [RouteGuardsLoginRegisterService]},
  {path: 'modificaProfilo', component: ModificaprofiloComponent, canActivate: [RouteGuardsLoginRegisterService]},
  {path: 'dettaglio/:id', component: DettaglioComponent, canActivate: [RouteGuardsLoginRegisterService]},
  {path: 'modificaImmagine', component: ModificaImmagineComponent, canActivate: [RouteGuardsLoginRegisterService]},
  {path: 'cards', component: MansonryComponent, canActivate: [RouteGuardsLoginRegisterService]},
  {path: 'cards/:filtro', component: MansonryComponent, canActivate: [RouteGuardsLoginRegisterService]},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule) },
  { path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },
  { path: 'list', loadChildren: () => import('./features/list/list.module').then(m => m.ListModule) },
  { path: 'list/:filtro', loadChildren: () => import('./features/list/list.module').then(m => m.ListModule) },
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
