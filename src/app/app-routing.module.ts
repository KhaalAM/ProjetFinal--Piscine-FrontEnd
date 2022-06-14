import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiviteesComponent } from './activitees/activitees.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { FicheInscriptionClientComponent } from './fiche-inscription-client/fiche-inscription-client.component';
import { HorairesComponent } from './horaires/horaires.component';
import { InscriptionAquaBikeComponent } from './inscription-aqua-bike/inscription-aqua-bike.component';
import { InscriptionAquaGymComponent } from './inscription-aqua-gym/inscription-aqua-gym.component';
import { InscriptionCoursNatationComponent } from './inscription-cours-natation/inscription-cours-natation.component';
import { InscriptionPlongeeComponent } from './inscription-plongee/inscription-plongee.component';
import { MenuComponent } from './menu/menu.component';
import { PlanningComponent } from './planning/planning.component';
import { TableauDeBordComponent } from './tableau-de-bord/tableau-de-bord.component';

const routes: Routes = [
{ path: '',component:TableauDeBordComponent },
{path:'activites',component:ActiviteesComponent,
  children:[
    {path:'aquaGym',component: InscriptionAquaGymComponent},
    {path:'aquaBike',component:InscriptionAquaBikeComponent},
    {path:'natation', component:InscriptionCoursNatationComponent},
    {path:'plongee',component:InscriptionPlongeeComponent}
    

  ]
},
{path:'planning',component:PlanningComponent},
{path:'contact',component:ContactComponent},
{path:'horaire',component:HorairesComponent},
{path:'ficheInscriptionClient',component:FicheInscriptionClientComponent},







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
