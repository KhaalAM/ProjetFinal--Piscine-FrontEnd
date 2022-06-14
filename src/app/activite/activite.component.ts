import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Activite } from '../model/activite.model';
import { ActiviteService } from '../service/activite.service';
import { PersonneService } from '../service/personne.service';

@Component({
  selector: 'app-activite',
  templateUrl: './activite.component.html',
  styleUrls: ['./activite.component.css']
})
export class ActiviteComponent implements OnInit {

  idActivite!: number;
  activite$!: Observable<Activite>;

  constructor(private activiteService:ActiviteService, private personneService:PersonneService, private router:Router, private activatedRoute : ActivatedRoute) {
    this.idActivite = activatedRoute.snapshot.params['idActivite']
    console.log("idActivité : " + this.idActivite)
  }

  ngOnInit(): void {
    this.activite$=this.activiteService.getActiviteById(this.idActivite);

  }

   onSubmit()
  {
    this.router.navigateByUrl("/inscriptionActivite/" + this.idActivite)
  }


}
