import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActiviteesComponent } from './activitees/activitees.component';
import { ContactComponent } from './contact/contact.component';
import { HorairesComponent } from './horaires/horaires.component';
import { FicheInscriptionClientComponent } from './fiche-inscription-client/fiche-inscription-client.component';

@NgModule({
  declarations: [
    AppComponent,
    ActiviteesComponent,
    ContactComponent,
    HorairesComponent,
    FicheInscriptionClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
