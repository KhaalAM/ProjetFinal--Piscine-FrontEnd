import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  username:string=""
  password: string=""

  connexion(){
    if(this.username == "admin" && this.password == "admin")
    {
      this.router.navigate(["insriptionActivite"])
    }
    else
    {
      this.username = ""
      this.password = ""
      this.router.navigate(["login"])
    }
  }
}
