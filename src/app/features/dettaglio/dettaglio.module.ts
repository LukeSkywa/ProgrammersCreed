import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DettaglioRoutingModule } from './dettaglio-routing.module';
import { DettaglioComponent } from './dettaglio.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';


@NgModule({
  declarations: [DettaglioComponent],
  imports: [
    CommonModule,
    DettaglioRoutingModule,
    SharedModule
  ]
})
export class DettaglioModule { }
