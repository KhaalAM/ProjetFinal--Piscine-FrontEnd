import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Planning } from '../model/planning.model';

import {DayPilot} from "@daypilot/daypilot-lite-angular";

@Injectable({
  providedIn: 'root'
})
export class PlanningService {
 


  constructor(private httpClient:HttpClient) { }

  events: any[] = [
    {
      id: "1",
      start: DayPilot.Date.today().addHours(10),
      end: DayPilot.Date.today().addHours(12),
      text: "Cours Natation"
    }
  ];

  getEvents(from: DayPilot.Date, to: DayPilot.Date): Observable<any[]> {

    return this.http.get("/" + from + " " + to) as Observable<any>;// backend ici 
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

