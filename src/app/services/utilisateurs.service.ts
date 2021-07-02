import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AddUser, serverResponse } from '../modele/utilisateurs.model';

@Injectable({
  providedIn: 'root'
})
export class UtilisateursService {

  private url = environment.serverURL + 'utilisateurs/';

  constructor(private http: HttpClient) {
  }

  GetAllUtilisateurs(idEntite): Observable<serverResponse> {
    return this.http.get<serverResponse>(this.url + 'all/' + idEntite, {
    });
  }

  getUtilisateurById(id): Observable<serverResponse> {
    return this.http.get<serverResponse>(this.url +id, {
    });
  }

  
  changerStatutUtilisateur(id): Observable<serverResponse> {
    return this.http.get<serverResponse>(this.url + 'changestatut/'+id, {
    });
  }

  deleteUtilisateur(id): Observable<serverResponse> {
    return this.http.delete<serverResponse>(this.url + 'delete/'+id, {
    });
  }

  AddUtilisateur(utilisateur : AddUser): Observable<serverResponse> {
    return this.http.post<serverResponse>(this.url + 'add' , utilisateur, {
    });
  }
  
  EditUtilisateur(id, utilisateur: AddUser): Observable<serverResponse> {
    return this.http.put<serverResponse>(this.url + 'put/' + id, utilisateur);
  }

  getAllRole(): Observable<serverResponse> {
    return this.http.get<serverResponse>(this.url + 'roles', {
    });
  }

}
