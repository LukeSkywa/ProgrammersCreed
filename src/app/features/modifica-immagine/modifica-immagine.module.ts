import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModificaImmagineRoutingModule } from './modifica-immagine-routing.module';
import { ModificaImmagineComponent } from './modifica-immagine.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';


@NgModule({
  declarations: [ModificaImmagineComponent],
  imports: [
    CommonModule,
    ModificaImmagineRoutingModule,
    SharedModule
  ]
})
export class ModificaImmagineModule { }
