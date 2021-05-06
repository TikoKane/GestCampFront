import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { serverResponse } from '../modele/utilisateurs.model';

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

  getAllRole(): Observable<serverResponse> {
    return this.http.get<serverResponse>(this.url + 'roles', {
    });
  }

}
