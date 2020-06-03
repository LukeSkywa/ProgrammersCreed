import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from 'src/app/components/menu/menu.component';
import { RemovewhitespacesPipe } from 'src/app/pipes/removewhitespaces.pipe';



@NgModule({
  declarations: [MenuComponent,RemovewhitespacesPipe],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MenuComponent,
    RemovewhitespacesPipe
  ]
})
export class SharedModule { }
