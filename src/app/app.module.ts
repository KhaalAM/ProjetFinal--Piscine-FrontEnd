import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActiviteesComponent } from './activitees/activitees.component';
import { ContactComponent } from './contact/contact.component';
import { HorairesComponent } from './horaires/horaires.component';
import { FicheInscriptionClientComponent } from './fiche-inscription-client/fiche-inscription-client.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { InscriptionActiviteComponent } from './inscription-activite/inscription-activite.component';

@NgModule({
  declarations: [
    AppComponent,
    ActiviteesComponent,
    ContactComponent,
    HorairesComponent,
    FicheInscriptionClientComponent,
    LoginComponent,
    PageNotFoundComponent,
    InscriptionActiviteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
