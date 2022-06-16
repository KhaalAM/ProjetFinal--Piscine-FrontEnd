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

  events: any[] = [
     {
       id: "1",
       start: "2022-06-20T08:00:00",
       end: "2022-06-20T10:00:00",
        text: "Aquagym"
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

