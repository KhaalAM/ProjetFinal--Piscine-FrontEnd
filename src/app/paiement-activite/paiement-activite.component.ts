import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Activite } from '../model/activite.model';
import { Personne } from '../model/personne.model';
import { ActiviteService } from '../service/activite.service';
import { PersonneService } from '../service/personne.service';

@Component({
  selector: 'app-paiement-activite',
  templateUrl: './paiement-activite.component.html',
  styleUrls: ['./paiement-activite.component.css']
})
export class PaiementActiviteComponent implements OnInit {

  paymentHandler:any = null;
  idActivite!: number;
  activite$!: Observable<Activite>;

//On verra plus tard comment on gère l'authentification, mais ca devrait pouvoir marcher en faisant passer le username ou l'id du client

 // id!: number;
 // personne$! : Observable<Personne>; 
  

  constructor( private activiteService:ActiviteService, private personneService:PersonneService, private router:Router, private activatedRoute : ActivatedRoute) {

    //this.id = activatedRoute.snapshot.params['id']
    //console.log("id : " + this.id)

    this.idActivite = activatedRoute.snapshot.params['idActivite']
    console.log("idActivité : " + this.idActivite)
   }

  
  ngOnInit() {
   
    //OBJECTIF : Réussir à récupérer l'object à partir de son ID, pour avoir accès à son prix et pouvoir le mettre en argument dans la fonction initializePayment!

    this.activite$=this.activiteService.getActiviteById(this.idActivite);
    
    // this.activite$.subscribe(); pas besoin vu qu'on a précisé le async dans le html


    //this.personne$=this.personneService.getPersonneById(this.id);
    this.invokeStripe();
  }
  
  initializePayment(amount : number) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51LA92TLWekqBRLkE92Soc0xfdUhdaJXQq09hMYqWEyoaZV7vpv0JvTGzDUXdGGI0oXD5KZ0fLWJcWnU5rTPm6IyU00UgNQAN7B',
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log({stripeToken})
        alert('Stripe token generated!');
      }
    });
  
    paymentHandler.open({
      name: "PiscineMunicipale",
      description: "Paiement de l'activité",
      amount: amount * 100  /* car de base la fonction raisonne sur des centimes*/
    });
  }
  
  invokeStripe() {
    if(!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement("script");
      script.id = "stripe-script";
      script.type = "text/javascript";
      script.src = "https://checkout.stripe.com/checkout.js";
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51LA92TLWekqBRLkE92Soc0xfdUhdaJXQq09hMYqWEyoaZV7vpv0JvTGzDUXdGGI0oXD5KZ0fLWJcWnU5rTPm6IyU00UgNQAN7B',
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken)
            alert('Payment has been successfull!');
          }
        });
      }
      window.document.body.appendChild(script);
    }
  }

}
