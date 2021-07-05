import { HttpClient, HttpHeaders } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';
<<<<<<< HEAD
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AddContact } from '../modele/contacts.model';
import { AddUser, serverResponse, UtilisateurModelServer, UserModel, UpdateUser } from '../modele/utilisateurs.model';
=======
import { Injectable} from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map, tap} from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { AddContact } from '../modele/contacts.model';
import { AddUser, serverResponse, UtilisateurModelServer, UpdateUser } from '../modele/utilisateurs.model';
>>>>>>> 883326b75956340257501077c3438bd45baad99d



@Injectable({
  providedIn: 'root'
})
export class UtilisateursService {

  private url = environment.serverURL;

<<<<<<< HEAD
=======

>>>>>>> 883326b75956340257501077c3438bd45baad99d
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' })
  };

  constructor(private http: HttpClient) {
  }

<<<<<<< HEAD
  getAllUtilisateur(id): Observable<serverResponse> {
    return this.http.get<serverResponse>(this.url + 'utilisateurs/all/'+id, {
=======
  getAllUtilisateur(): Observable<serverResponse> {
    return this.http.get<serverResponse>(this.url + 'utilisateurs', {
>>>>>>> 883326b75956340257501077c3438bd45baad99d
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

<<<<<<< HEAD
  
=======
>>>>>>> 883326b75956340257501077c3438bd45baad99d
  UpdateUtilisateur(id,utilisateur : UpdateUser){
    return this.http.put(this.url + 'utilisateurs/put/' + id , utilisateur);
  }

<<<<<<< HEAD
}
=======
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
>>>>>>> 883326b75956340257501077c3438bd45baad99d
