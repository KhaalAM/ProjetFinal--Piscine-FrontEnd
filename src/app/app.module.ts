import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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

import { HeadComponent } from './head/head.component';
import { MenuComponent } from './menu/menu.component';
import { MatSliderModule } from '@angular/material/slider';
import { TableauDeBordComponent } from './tableau-de-bord/tableau-de-bord.component';

import { PaiementActiviteComponent } from './paiement-activite/paiement-activite.component';
import { SelectActiviteComponent } from './select-activite/select-activite.component';






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
    HeadComponent,
    MenuComponent,
    TableauDeBordComponent,
    
    LoginComponent,
    PageNotFoundComponent,
    InscriptionActiviteComponent,
    PaiementActiviteComponent,
    SelectActiviteComponent

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
    MaterialExampleModule,
   MatSliderModule

    
    

  ],
  
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
