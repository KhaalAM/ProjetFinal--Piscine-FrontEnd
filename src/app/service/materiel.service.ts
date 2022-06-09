import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Materiel } from '../model/materiel.model';

@Injectable({
  providedIn: 'root'
})
export class MaterielService {


  constructor(private httpClient:HttpClient) { }

  getAllMateriels():Observable<Materiel[]>{
    return this.httpClient.get<Materiel[]>(environment.urlE+"materiels")// !!! Verifier les url avec le back !!!
  }

  addMateriel(materiel:Materiel):Observable<Materiel>{
    return this.httpClient.post<Materiel>(environment.urlE + "saveMateriel", materiel)
  }

  deleteMateriel(id:number):Observable<void>{
    return this.httpClient.delete<void>(environment.urlE+"delete/"+id)
  }

  updateMateriel(materiel:Materiel):Observable<Materiel>{
    return this.httpClient.put<Materiel>(environment.urlE + "updateMateriel", materiel)
  }

  getMaterielById(id:number):Observable<Materiel>{
    return this.httpClient.get<Materiel>(environment.urlE+"materiel/"+id)
  }
}
