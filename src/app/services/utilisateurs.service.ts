import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AddUser, serverResponse } from '../modele/utilisateurs.model';

@Injectable({
  providedIn: 'root'
})
export class UtilisateursService {

  private url = environment.serverURL;

  constructor(private http: HttpClient) {
  }

  getAllUtilisateur(): Observable<serverResponse> {
    return this.http.get<serverResponse>(this.url + 'utilisateurs', {
    });
  }

  getUtilisateurById(id): Observable<serverResponse> {
    return this.http.get<serverResponse>(this.url + 'utilisateurs/'+id, {
    });
  }

  
  changerStatutUtilisateur(id): Observable<serverResponse> {
    return this.http.get<serverResponse>(this.url + 'utilisateurs/changestatut/'+id, {
    });
  }

  deleteUtilisateur(id): Observable<serverResponse> {
    return this.http.delete<serverResponse>(this.url + 'utilisateurs/delete/'+id, {
    });
  }

  AddUtilisateur(utilisateur : AddUser): Observable<serverResponse> {
    return this.http.post<serverResponse>(this.url + 'utilisateurs/add',utilisateur, {
    });
  }
  getAllRole(): Observable<serverResponse> {
    return this.http.get<serverResponse>(this.url + 'roles', {
    });
  }

}
