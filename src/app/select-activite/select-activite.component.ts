import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Activite } from '../model/activite.model';
import { ActiviteService } from '../service/activite.service';

@Component({
  selector: 'app-select-activite',
  templateUrl: './select-activite.component.html',
  styleUrls: ['./select-activite.component.css']
})
export class SelectActiviteComponent implements OnInit {

  nomActivite!: string;
  listeActivite$!: Observable<Activite[]>;
  constructor(private activiteService:ActiviteService, private router:Router, private activatedRoute : ActivatedRoute) {
    this.nomActivite = activatedRoute.snapshot.params['nomActivite']
    console.log("idActivité : " + this.nomActivite)
   }

  ngOnInit(): void {
   this.listeActivite$=this.activiteService.getListActivitiesSameName(this.nomActivite);
  }

  onSubmit(idActivite: number)
  {
    this.router.navigateByUrl("/descriptionActivite/" + idActivite)
  }

}
