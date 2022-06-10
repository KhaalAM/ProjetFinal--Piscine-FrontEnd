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

  getAllActivites():Observable<Activites[]>{
    return this.httpClient.get<Activites[]>(environment.urlE+"listActivitys")
  }

  addActivites(activites:Activites):Observable<Activites>{
    return this.httpClient.post<Activites>(environment.urlE + "saveActivity", activites)
  }

  deleteActivites(id:number):Observable<void>{
    return this.httpClient.delete<void>(environment.urlE+"deleteActivity/"+id)
  }

  updateActivites(activites:Activites):Observable<Activites>{
    return this.httpClient.put<Activites>(environment.urlE + "updateActivity", activites) // !!! Verifier la fonction avec le back !!!
  }

  getActivitesById(id:number):Observable<Activites>{
    return this.httpClient.get<Activites>(environment.urlE+"getActivity/"+id)
  }
}
