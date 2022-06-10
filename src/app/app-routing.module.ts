import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiviteesComponent } from './activitees/activitees.component';
import { ContactComponent } from './contact/contact.component';
import { FicheInscriptionClientComponent } from './fiche-inscription-client/fiche-inscription-client.component';
import { HorairesComponent } from './horaires/horaires.component';
import { InscriptionActiviteComponent } from './inscription-activite/inscription-activite.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
{path:'activitees',component:ActiviteesComponent},
{path:'contact',component:ContactComponent},
{path:'horaire',component:HorairesComponent},
{path:'ficheInscriptionClient',component:FicheInscriptionClientComponent},
{path: "login", component: LoginComponent,},
{path:'inscriptionActivite',component:InscriptionActiviteComponent},
{path: "**", component: PageNotFoundComponent} //url qui n'existe pas, A METTRE EN DERNIER


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
