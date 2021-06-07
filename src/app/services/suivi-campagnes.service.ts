import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SuiviCampagnes} from '../modele/suivi-Campagnes';


@Injectable({
  providedIn: 'root',
})
export class SuiviCampagnesService {

  private url = environment.serverURL + 'suiviCampagnes/';

  constructor(private http: HttpClient) {
  }

  AddSuiviCampagne(suiviCampagne: SuiviCampagnes): Observable<SuiviCampagnes> {
    return this.http.post<SuiviCampagnes>(this.url + 'add', suiviCampagne);
  }

  getAllSuiviCampagne(): Observable<SuiviCampagnes> {
    return this.http.get<SuiviCampagnes>(this.url);
  }

  getSuiviCampagne(id): Observable<SuiviCampagnes> {
    return this.http.get<SuiviCampagnes>(this.url + id);
  }

  EditSuiviCampagne(id, suiviCampagne: SuiviCampagnes): Observable<SuiviCampagnes> {
    return this.http.put<SuiviCampagnes>(this.url + 'put/' + id, suiviCampagne);
  }

  DeleteSuiviCampagne(id): Observable<SuiviCampagnes> {
    return this.http.delete<SuiviCampagnes>(this.url + 'delete/' + id);
  }
}
