import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Activite } from '../model/activite.model';

@Injectable({
  providedIn: 'root'
})
export class ActivitesService {

  constructor(private httpClient:HttpClient) { }

  getAllActivites():Observable<Activite[]>{
    return this.httpClient.get<Activite[]>(environment.urlE+"listActivities")
  }

  addActivites(activite:Activite):Observable<Activite>{
    return this.httpClient.post<Activite>(environment.urlE + "saveActivity", activite)
  }

  deleteActivites(idActivite:number):Observable<void>{
    return this.httpClient.delete<void>(environment.urlE+"deleteActivity/"+ idActivite)
  }

  updateActivites(activite:Activite):Observable<Activite>{
    return this.httpClient.put<Activite>(environment.urlE + "updateActivity", activite)
  }

  getActivitesById(idActivite:number):Observable<Activite>{
    return this.httpClient.get<Activite>(environment.urlE+"getActivity/"+ idActivite)
  }

  //A tester, je ne sais pas si ça marche, fonction qui permet d'attribuer l'activite à un planning, la fonction passe par une nativeQuery qui vérifie que l'activité est bien dans la plage horaire de la piscine
  //(mais ne vérifie pas encore si elle chevauche ou pas une autre activité)
  setPlanningToActivity(activite:Activite, idPlanning:number):Observable<Activite>{
    return this.httpClient.put<Activite>(environment.urlE + "setPlanningToActivity/" + activite.idActivite +"/"+ idPlanning, activite)
  }

}
