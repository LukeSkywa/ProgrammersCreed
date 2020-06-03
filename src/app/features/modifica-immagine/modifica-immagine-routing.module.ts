import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModificaImmagineComponent } from './modifica-immagine.component';

const routes: Routes = [{ path: '', component: ModificaImmagineComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModificaImmagineRoutingModule { }
