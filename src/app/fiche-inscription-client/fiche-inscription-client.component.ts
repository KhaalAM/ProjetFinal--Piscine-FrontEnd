import { PersonneService } from './../service/personne.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fiche-inscription-client',
  templateUrl: './fiche-inscription-client.component.html',
  styleUrls: ['./fiche-inscription-client.component.css']
})
export class FicheInscriptionClientComponent implements OnInit {

 personneForm!:FormGroup

  constructor(private formBuilder:FormBuilder, private router:Router, private personneService:PersonneService) { }

  ngOnInit(): void {
    this.personneForm = this.formBuilder.group({
      nom:[null,[Validators.required]],
      prenom:[null,[Validators.required]],
      username:[null,[Validators.required]],
      password:[null,[Validators.required]],
      dateNaissance:[null,[Validators.required]],
      adresse:[null,[Validators.required]],
      telephone:[null,[Validators.required]],
      email:[null,[Validators.required]]
    })
  }

  onSave(){
    this.personneService.addPersonne(this.personneForm.value).subscribe()
    this.router.navigate(["AMODIFIER"])
  }
}
