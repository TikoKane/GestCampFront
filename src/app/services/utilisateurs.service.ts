import { HttpClient, HttpHeaders } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';
import { Injectable} from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map, tap} from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { AddContact } from '../modele/contacts.model';
import { AddUser, serverResponse, UtilisateurModelServer, UpdateUser } from '../modele/utilisateurs.model';



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

  getAllUtilisateur(idEntite): Observable<serverResponse> {
    return this.http.get<serverResponse>(this.url + 'utilisateurs/all/' + idEntite, {
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

  UpdateUtilisateur(id,utilisateur : UpdateUser){
    return this.http.put(this.url + 'utilisateurs/put/' + id , utilisateur);
  }

  /*
  changePassword(userDetails : any){
    const resetPasswordViewmodel = {
      OldPassword: userDetails.oldPassword,
      Password: userDetails.newPassword,
      ConfirmPassword: userDetails.newPassword,
      User: userDetails.user
    };
    return this.http.post<any>(this.baseUrlChangePassword, resetPasswordViewmodel).pipe(
      map(
        (result) =>{
          return result;
        },
        (error) =>{
          return error;
        }
      )
    );
  }
*/
}
