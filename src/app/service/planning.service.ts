import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Planning } from '../model/planning.model';

import {DayPilot} from "@daypilot/daypilot-lite-angular";
import { ActiviteService } from './activite.service';
import { Activite } from '../model/activite.model';

@Injectable({
  providedIn: 'root'
})
export class PlanningService {
 


  constructor(private httpClient:HttpClient, private activiteService:ActiviteService) { }

  // events: any[] = [
  //   {
  //     id: "1",
  //     start: DayPilot.Date.today().addHours(10),
  //     end: DayPilot.Date.today().addHours(12),
  //     text: "Cours Natation"
  //   }
  // ];

  //Pas réussi a faire la liaison avec notre liste d'activite donc en brut pour le moment
  events: any[] = [
    {
      id: "1",
      start: "2022-06-20T08:00:00",
      end: "2022-06-20T10:00:00",
       text: "Aquagym"
     },
    {
      id: "2",
      start: "2022-06-20T10:00:00",
      end: "2022-06-20T12:00:00",
       text: "Aquabike"
     },
    {
      id: "3",
      start: "2022-06-20T12:00:00",
      end: "2022-06-20T14:00:00",
       text: "Natation Maternite"
     },
    {
      id: "4",
      start: "2022-06-20T14:00:00",
      end: "2022-06-20T16:00:00",
       text: "Aquabike"
     },
    {
      id: "5",
      start: "2022-06-20T16:00:00",
      end: "2022-06-20T18:00:00",
       text: "Aquafusion"
     },
    {
      id: "6",
      start: "2022-06-20T18:00:00",
      end: "2022-06-20T20:00:00",
       text: "Lecon personnelle"
     },
   
   {
      id: "7",
      start: "2022-06-21T08:00:00",
      end: "2022-06-21T10:00:00",
       text: "Aqua Crossfit"
     },
    {
      id: "8",
      start: "2022-06-21T10:00:00",
      end: "2022-06-21T12:00:00",
       text: "Water run"
     },
    {
      id: "9",
      start: "2022-06-21T12:00:00",
      end: "2022-06-21T14:00:00",
       text: "Natation Maternite"
     },
    {
      id: "10",
      start: "2022-06-21T14:00:00",
      end: "2022-06-21T16:00:00",
       text: "Yoga"
     },
    {
      id: "11",
      start: "2022-06-21T16:00:00",
      end: "2022-06-21T18:00:00",
       text: "Lecon personnelle"
     },
    {
      id: "12",
      start: "2022-06-21T18:00:00",
      end: "2022-06-21T20:00:00",
       text: "Waterpolo"
     },
   {
      id: "13",
      start: "2022-06-22T08:00:00",
      end: "2022-06-22T10:00:00",
       text: "Aqua Crossfit"
     },
    {
      id: "14",
      start: "2022-06-22T10:00:00",
      end: "2022-06-22T12:00:00",
       text: "Aquagym"
     },
    {
      id: "15",
      start: "2022-06-22T12:00:00",
      end: "2022-06-22T14:00:00",
       text: "Water run"
     },
    {
      id: "16",
      start: "2022-06-22T14:00:00",
      end: "2022-06-22T16:00:00",
       text: "Aqua Crossfit"
     },
    {
      id: "17",
      start: "2022-06-22T16:00:00",
      end: "2022-06-22T18:00:00",
       text: "Aquabike"
     },
    {
      id: "18",
      start: "2022-06-22T18:00:00",
      end: "2022-06-22T20:00:00",
       text: "Lecon personnelle"
     },
   {
      id: "19",
      start: "2022-06-23T08:00:00",
      end: "2022-06-23T10:00:00",
       text: "Aquagym"
     },
    {
      id: "20",
      start: "2022-06-23T10:00:00",
      end: "2022-06-23T12:00:00",
       text: "Water run"
     },
    {
      id: "21",
      start: "2022-06-23T12:00:00",
      end: "2022-06-23T14:00:00",
       text: "Natation Maternite"
     },
    {
      id: "22",
      start: "2022-06-23T14:00:00",
      end: "2022-06-23T16:00:00",
       text: "Lecon personnelle"
     },
    {
      id: "23",
      start: "2022-06-23T16:00:00",
      end: "2022-06-23T18:00:00",
       text: "Yoga"
     },
    {
      id: "24",
      start: "2022-06-23T18:00:00",
      end: "2022-06-23T20:00:00",
       text: "Waterpolo"
     },
   {
      id: "25",
      start: "2022-06-24T08:00:00",
      end: "2022-06-24T10:00:00",
       text: "Water run"
     },
    {
      id: "26",
      start: "2022-06-24T10:00:00",
      end: "2022-06-24T12:00:00",
       text: "Aquagym"
     },
    {
      id: "27",
      start: "2022-06-24T12:00:00",
      end: "2022-06-24T14:00:00",
       text: "Natation Maternite"
     },
    {
      id: "28",
      start: "2022-06-24T14:00:00",
      end: "2022-06-24T16:00:00",
       text: "Lecon personnelle"
     },
    {
      id: "29",
      start: "2022-06-24T16:00:00",
      end: "2022-06-24T18:00:00",
       text: "Aquafusion"
     },
    {
      id: "30",
      start: "2022-06-24T18:00:00",
      end: "2022-06-24T20:00:00",
       text: "Waterpolo"
     },
   {
      id: "31",
      start: "2022-06-25T08:00:00",
      end: "2022-06-25T10:00:00",
       text: "Aqua Crossfit"
     },
    {
      id: "32",
      start: "2022-06-25T10:00:00",
      end: "2022-06-25T12:00:00",
       text: "Yoga"
     },
    {
      id: "33",
      start: "2022-06-25T12:00:00",
      end: "2022-06-25T14:00:00",
       text: "Natation Maternite"
     },
    {
      id: "34",
      start: "2022-06-25T14:00:00",
      end: "2022-06-25T16:00:00",
       text: "Aquafusion"
     }
 
   
  ];
  


  /*getEvents(from: DayPilot.Date, to: DayPilot.Date): Observable<any[]> {

    return this.http.get("/" + from + " " + to) as Observable<any>;// backend ici 
    // return this.http.get("/api/events?from=" + from.toString() + "&to=" + to.toString());
  }*/

  getEvents(from: DayPilot.Date, to: DayPilot.Date): Observable<any[]> {

    // test: simulation d'une requete HTTP
    return new Observable(observer => {
      setTimeout(() => {
        observer.next(this.events);
      }, 200);
    });

    
   
  }


  




  getAllPlannings():Observable<Planning[]>{
    return this.httpClient.get<Planning[]>(environment.urlE+"listSchedules")
  }

  addPlanning(planning:Planning):Observable<Planning>{
    return this.httpClient.post<Planning>(environment.urlE + "saveSchedule", planning)
  }

  deletePlanning(id:number):Observable<void>{
    return this.httpClient.delete<void>(environment.urlE+"deleteSchedule/"+id)
  }

  updatePlanning(planning:Planning):Observable<Planning>{
    return this.httpClient.put<Planning>(environment.urlE + "updateSchedule", planning)
  }

  getPlanningById(id:number):Observable<Planning>{
    return this.httpClient.get<Planning>(environment.urlE+"getSchedule/"+id)
  }










}

