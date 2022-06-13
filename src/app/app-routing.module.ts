import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiviteesComponent } from './activitees/activitees.component';
import { ContactComponent } from './contact/contact.component';
import { FicheInscriptionClientComponent } from './fiche-inscription-client/fiche-inscription-client.component';
import { HorairesComponent } from './horaires/horaires.component';

import { InscriptionAquaBikeComponent } from './inscription-aqua-bike/inscription-aqua-bike.component';
import { InscriptionAquaGymComponent } from './inscription-aqua-gym/inscription-aqua-gym.component';
import { InscriptionCoursNatationComponent } from './inscription-cours-natation/inscription-cours-natation.component';
import { InscriptionPlongeeComponent } from './inscription-plongee/inscription-plongee.component';
import { InscriptionActiviteComponent } from './inscription-activite/inscription-activite.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostInscriptionComponent } from './post-inscription/post-inscription.component';


const routes: Routes = [
{path:'activites',component:ActiviteesComponent,
  children:[
    {path:'aquaGym',component: InscriptionAquaGymComponent},
    {path:'aquaBike',component:InscriptionAquaBikeComponent},
    {path:'natation', component:InscriptionCoursNatationComponent},
    {path:'plongee',component:InscriptionPlongeeComponent}

  ]
},
{path:'contact',component:ContactComponent},
{path:'horaire',component:HorairesComponent},
{path:'ficheInscriptionClient',component:FicheInscriptionClientComponent},
{path: "login", component: LoginComponent,},

{path:'inscriptionActivite',component:InscriptionActiviteComponent},
{path:'postInscription', component:PostInscriptionComponent},

{path: "**", component: PageNotFoundComponent} //url qui n'existe pas, A METTRE EN DERNIER


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
