import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Personne } from '../model/personne.model';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {

  constructor(private httpClient:HttpClient) { }

  getAllPersonnes():Observable<Personne[]>{
    return this.httpClient.get<Personne[]>(environment.urlE+"personnes")
  }

  addPersonne(personne:Personne):Observable<Personne>{
    return this.httpClient.post<Personne>(environment.urlE + "savePersonne", personne)
  }

  deletePersonne(id:number):Observable<void>{
    return this.httpClient.delete<void>(environment.urlE+"delete/"+id)
  }

  updatePersonne(personne:Personne):Observable<Personne>{
    return this.httpClient.put<Personne>(environment.urlE + "updatePersonne", personne)
  }

  getPersonneById(id:number):Observable<Personne>{
    return this.httpClient.get<Personne>(environment.urlE+"personne/"+id)
  }
}
