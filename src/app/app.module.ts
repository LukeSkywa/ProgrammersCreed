import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './components/profile/profile.component';
import { FeedbackComponent } from './components/feedback/feedback.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListSerieComponent } from './components/list-serie/list-serie.component';
import { CardsComponent } from './components/cards/cards.component';
import { RemovewhitespacesPipe } from './pipes/removewhitespaces.pipe';
import { ModificaprofiloComponent } from './components/modificaprofilo/modificaprofilo.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DettaglioComponent } from './components/dettaglio/dettaglio.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedbackComponent,
    MenuComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    ListSerieComponent,
    CardsComponent,
    CardsComponent,
    RemovewhitespacesPipe,
    ModificaprofiloComponent,
    PageNotFoundComponent,
    DettaglioComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
