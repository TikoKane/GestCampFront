import { HttpClient, HttpHeaders } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';
import { Injectable} from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, tap} from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { AddContact } from '../modele/contacts.model';
import { AddUser, serverResponse, UtilisateurModelServer, UserModel } from '../modele/utilisateurs.model';



@Injectable({
  providedIn: 'root'
})
export class UtilisateursService {

  private url = environment.serverURL;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' })
  };

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

  /*
  UpdateUtilisateur(id: number, userModel: UserModel):Observable<UserModel>{
    return this.http.put<UserModel>(this.url + 'utilisateurs/put/' + id , userModel);
  }
  */

  UpdateUtilisateur(userModel:UserModel): Observable<any>{
    const httOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this.http.put(`${this.url}/${userModel.id}`, userModel);
  }

}