import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModificaprofiloComponent } from './modificaprofilo.component';

const routes: Routes = [{ path: '', component: ModificaprofiloComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModificaprofiloRoutingModule { }
