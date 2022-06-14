import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSidenavModule} from '@angular/material/sidenav'
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MaterialExampleModule } from 'src/material.module';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ActiviteesComponent } from './activitees/activitees.component';
import { ContactComponent } from './contact/contact.component';
import { HorairesComponent } from './horaires/horaires.component';
import { FicheInscriptionClientComponent } from './fiche-inscription-client/fiche-inscription-client.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { InscriptionActiviteComponent } from './inscription-activite/inscription-activite.component';

import { InscriptionAquaBikeComponent } from './inscription-aqua-bike/inscription-aqua-bike.component';
import { InscriptionAquaGymComponent } from './inscription-aqua-gym/inscription-aqua-gym.component';
import { InscriptionCoursNatationComponent } from './inscription-cours-natation/inscription-cours-natation.component';
import { InscriptionPlongeeComponent } from './inscription-plongee/inscription-plongee.component';
import { PaiementActiviteComponent } from './paiement-activite/paiement-activite.component';
import { ActiviteComponent } from './activite/activite.component';





@NgModule({
  declarations: [
    AppComponent,
    ActiviteesComponent,
    ContactComponent,
    HorairesComponent,
    
    FicheInscriptionClientComponent,
    InscriptionAquaBikeComponent,
    InscriptionAquaGymComponent,
    InscriptionCoursNatationComponent,
    InscriptionPlongeeComponent,
    
    LoginComponent,
    PageNotFoundComponent,
    InscriptionActiviteComponent,
    PaiementActiviteComponent,
    ActiviteComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialExampleModule
   

    
    

  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
