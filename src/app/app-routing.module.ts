import { ActiviteComponent } from './activite/activite.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitesComponent } from './activites/activites.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { FicheInscriptionClientComponent } from './fiche-inscription-client/fiche-inscription-client.component';
import { HorairesComponent } from './horaires/horaires.component';

import { MenuComponent } from './menu/menu.component';
import { TableauDeBordComponent } from './tableau-de-bord/tableau-de-bord.component';

import { InscriptionActiviteComponent } from './inscription-activite/inscription-activite.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SelectActiviteComponent } from './select-activite/select-activite.component';
import { PaiementActiviteComponent } from './paiement-activite/paiement-activite.component';


const routes: Routes = [
{ path: '',component:TableauDeBordComponent },
{path:'contact',component:ContactComponent},
{path:'horaire',component:HorairesComponent},
{path:'ficheInscriptionClient',component:FicheInscriptionClientComponent},
{path: "login", component: LoginComponent},
{path:'activites',component:ActivitesComponent},
{path: "affichageListeActiviteMemeNom/:nomActivite", component:SelectActiviteComponent},
{path: "descriptionActivite/:idActivite", component:ActiviteComponent},
{path:'inscriptionActivite/:idActivite',component:InscriptionActiviteComponent},
{path: "paiementActivite/:idActivite", component : PaiementActiviteComponent},
{path: "**", component: PageNotFoundComponent} //url qui n'existe pas, A METTRE EN DERNIER



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
