import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';


@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
  @Input() inputSideNav!:MatSidenav;

  constructor(private location: Location) { }

  ngOnInit(): void {}

  retour() {
    this.location.back();
  }
}
