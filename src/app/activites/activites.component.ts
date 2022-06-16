import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Activite } from '../model/activite.model';
import { ActiviteService } from '../service/activite.service';

@Component({
  selector: 'app-activites',
  templateUrl: './activites.component.html',
  styleUrls: ['./activites.component.css']
})
export class ActivitesComponent implements OnInit {

  listeNomActivites$!: Observable<Activite["nomActivite"][]>

  constructor(private router:Router, private activiteService:ActiviteService) { }

  ngOnInit(): void {
    //METHODE EN PASSANT PAR LE BACK car je ne vois pas encore comment rentrer une liste d'activités en brut dans l'observable
    this.listeNomActivites$=this.activiteService.getListeEachActivityType()
    // on va chercher a récupérer tous les noms d'activités possibles et les stocker dans des Activités vides avec seulement le nom
  }

  goListSameName(nomActivite: string)
  {
    this.router.navigateByUrl("affichageListeActiviteMemeNom/" + nomActivite)
  }
}
