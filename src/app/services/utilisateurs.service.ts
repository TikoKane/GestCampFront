import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ServerResponse } from '../modele/utilisateurs.model';

@Injectable({
  providedIn: 'root',
})
export class UtilisateursService {

  private url = environment.serverURL;

  constructor(private http: HttpClient) {
  }

  getAllUtilisateur(): Observable<ServerResponse> {
    return this.http.get<ServerResponse>(this.url + 'utilisateurs', {
    });
  }

  getAllRole(): Observable<ServerResponse> {
    return this.http.get<ServerResponse>(this.url + 'roles', {
    });
  }
}
