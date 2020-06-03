import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DettaglioComponent } from './dettaglio.component';

const routes: Routes = [{ path: '', component: DettaglioComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DettaglioRoutingModule { }
