import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Activite } from '../model/activite.model';
import { ActiviteService } from '../service/activite.service';
import { PersonneService } from '../service/personne.service';

@Component({
  selector: 'app-inscription-activite',
  templateUrl: './inscription-activite.component.html',
  styleUrls: ['./inscription-activite.component.css']
})
export class InscriptionActiviteComponent implements OnInit {

  idActivite!: number;
  activite$!: Observable<Activite>;

  constructor(private activiteService:ActiviteService, private personneService:PersonneService, private router:Router, private activatedRoute : ActivatedRoute) {
    this.idActivite = activatedRoute.snapshot.params['idActivite']
    console.log("idActivité : " + this.idActivite)
   }

  ngOnInit(): void {
    this.activite$=this.activiteService.getActiviteById(this.idActivite);
  }

  paiementActivite(idActivite:number):void{
    
    this.router.navigateByUrl("/paiementActivite/" + this.idActivite)

  }

}
