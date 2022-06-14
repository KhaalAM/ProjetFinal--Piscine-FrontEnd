import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Activite } from '../model/activite.model';
import { ActiviteService } from '../service/activite.service';

@Component({
  selector: 'app-activitees',
  templateUrl: './activitees.component.html',
  styleUrls: ['./activitees.component.css']
})
export class ActiviteesComponent implements OnInit {
  listeActivite$!: Observable<Activite[]>;
 
  constructor(private router:Router, private activiteService:ActiviteService) { }

  ngOnInit(): void {

   // this.listeActivite$=
    
  }

  goListSameName(nomActivite: string)
  {
    this.router.navigateByUrl("affichageListeActiviteMemeNom/" + nomActivite)
  }

}
