import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModificaprofiloRoutingModule } from './modificaprofilo-routing.module';
import { ModificaprofiloComponent } from './modificaprofilo.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';


@NgModule({
  declarations: [ModificaprofiloComponent],
  imports: [
    CommonModule,
    ModificaprofiloRoutingModule,
    SharedModule
  ]
})
export class ModificaprofiloModule { }
