import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Planning } from '../model/planning.model';

@Injectable({
  providedIn: 'root'
})
export class PlanningService {


  constructor(private httpClient:HttpClient) { }

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
    return this.httpClient.put<Planning>(environment.urlE + "updateSchedule", planning)  // !!! Verifier la fonction avec le back !!!
  }

  getPlanningById(id:number):Observable<Planning>{
    return this.httpClient.get<Planning>(environment.urlE+"getSchedule/"+id)
  }
}
