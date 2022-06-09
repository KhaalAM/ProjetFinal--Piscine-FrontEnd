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
    return this.httpClient.get<Planning[]>(environment.urlE+"plannings")// !!! Verifier les url avec le back !!!
  }

  addPlanning(planning:Planning):Observable<Planning>{
    return this.httpClient.post<Planning>(environment.urlE + "savePlanning", planning)
  }

  deletePlanning(id:number):Observable<void>{
    return this.httpClient.delete<void>(environment.urlE+"delete/"+id)
  }

  updatePlanning(planning:Planning):Observable<Planning>{
    return this.httpClient.put<Planning>(environment.urlE + "updatePlanning", planning)
  }

  getPlanningById(id:number):Observable<Planning>{
    return this.httpClient.get<Planning>(environment.urlE+"planning/"+id)
  }
}
