
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteGuardsLoginRegisterService } from './services/route-guards-login-register.service';
import { RouteGuardsPagesService } from './services/route-guards-pages.service';



const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule) },
  { path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },
  { path: 'list', loadChildren: () => import('./features/list/list.module').then(m => m.ListModule) },
  { path: 'list/:filtro', loadChildren: () => import('./features/list/list.module').then(m => m.ListModule) },
  { path: 'cards', loadChildren: () => import('./features/cards/cards.module').then(m => m.CardsModule) },
  { path: 'cards/:filtro', loadChildren: () => import('./features/cards/cards.module').then(m => m.CardsModule) },
  { path: 'feedback', loadChildren: () => import('./features/feedback/feedback.module').then(m => m.FeedbackModule) },
  { path: 'signin', loadChildren: () => import('./features/register/register.module').then(m => m.RegisterModule) },
  { path: 'dettaglio/:id', loadChildren: () => import('./features/dettaglio/dettaglio.module').then(m => m.DettaglioModule) },
  { path: 'profile', loadChildren: () => import('./features/profile/profile.module').then(m => m.ProfileModule) },
  { path: 'modificaProfilo', loadChildren: () => import('./features/modificaprofilo/modificaprofilo.module').then(m => m.ModificaprofiloModule) },
  { path: 'modificaImmagine', loadChildren: () => import('./features/modifica-immagine/modifica-immagine.module').then(m => m.ModificaImmagineModule) },
  { path: '**', loadChildren: () => import('./features/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule) }
]

@NgModule({
  imports: [
      RouterModule.forRoot(routes),
  ],
  exports: [
      RouterModule
  ]
})
export class AppRoutingModule{ }
