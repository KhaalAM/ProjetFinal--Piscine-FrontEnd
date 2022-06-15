import { Component, OnInit } from '@angular/core';
import {FormGroup,Validators,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-inscription-aqua-bike',
  templateUrl: './inscription-aqua-bike.component.html',
  styleUrls: ['./inscription-aqua-bike.component.css']
})
export class InscriptionAquaBikeComponent implements OnInit {

  personneInscri!:FormGroup
  constructor(private formBuilder:FormBuilder, private router:Router) { }


  ngOnInit(): void {
    this.personneInscri = this.formBuilder.group({
      nom:[null,[Validators.required]],
      prenom:[null,[Validators.required]],
      telephone:[null,[Validators.required]],
      email:[null,[Validators.required]],
      places:[null,[Validators.required]]
    })
  }

  onSave(){
    /*this.XXXXXX.addPersonne(this.personneInscri.value).subscribe()*/
    this.router.navigate([""])
  }
}
