import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Activites } from '../model/activites.model';

@Injectable({
  providedIn: 'root'
})
export class ActivitesService {

  constructor(private httpClient:HttpClient) { }

  getAllActivitess():Observable<Activites[]>{
    return this.httpClient.get<Activites[]>(environment.urlE+"activitess")// !!! Verifier les url avec le back !!!
  }

  addActivites(activites:Activites):Observable<Activites>{
    return this.httpClient.post<Activites>(environment.urlE + "saveActivites", activites)
  }

  deleteActivites(id:number):Observable<void>{
    return this.httpClient.delete<void>(environment.urlE+"delete/"+id)
  }

  updateActivites(activites:Activites):Observable<Activites>{
    return this.httpClient.put<Activites>(environment.urlE + "updateActivites", activites)
  }

  getActivitesById(id:number):Observable<Activites>{
    return this.httpClient.get<Activites>(environment.urlE+"activites/"+id)
  }
}
