
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { ModificaprofiloComponent } from './components/modificaprofilo/modificaprofilo.component';
import { RouteGuardsLoginRegisterService } from './services/route-guards-login-register.service';
import { RouteGuardsPagesService } from './services/route-guards-pages.service';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DettaglioComponent } from './components/dettaglio/dettaglio.component';
import { ModificaImmagineComponent } from './components/modifica-immagine/modifica-immagine.component';



const routes: Routes = [
  {path: 'profile', component: ProfileComponent, canActivate: [RouteGuardsLoginRegisterService]},
  {path: 'modificaProfilo', component: ModificaprofiloComponent, canActivate: [RouteGuardsLoginRegisterService]},
  {path: 'dettaglio/:id', component: DettaglioComponent, canActivate: [RouteGuardsLoginRegisterService]},
  {path: 'modificaImmagine', component: ModificaImmagineComponent, canActivate: [RouteGuardsLoginRegisterService]},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule) },
  { path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },
  { path: 'list', loadChildren: () => import('./features/list/list.module').then(m => m.ListModule) },
  { path: 'list/:filtro', loadChildren: () => import('./features/list/list.module').then(m => m.ListModule) },
  { path: 'cards', loadChildren: () => import('./features/cards/cards.module').then(m => m.CardsModule) },
  { path: 'cards/:filtro', loadChildren: () => import('./features/cards/cards.module').then(m => m.CardsModule) },
  { path: 'feedback', loadChildren: () => import('./features/feedback/feedback.module').then(m => m.FeedbackModule) },
  { path: 'signin', loadChildren: () => import('./features/register/register.module').then(m => m.RegisterModule) },
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
