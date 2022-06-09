import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiviteesComponent } from './activitees/activitees.component';
import { ContactComponent } from './contact/contact.component';
import { FicheInscriptionClientComponent } from './fiche-inscription-client/fiche-inscription-client.component';
import { HorairesComponent } from './horaires/horaires.component';

const routes: Routes = [
{path:'activitees',component:ActiviteesComponent},
{path:'contact',component:ContactComponent},
{path:'horaire',component:HorairesComponent},
{path:'ficheInscriptionClient',component:FicheInscriptionClientComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
