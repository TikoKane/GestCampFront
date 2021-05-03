import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SuiviCampagneCampagnes} from '../modele/suivi-Campagne-Campagnes';


@Injectable({
  providedIn: 'root',
})
export class SuiviCampagneCampagnesService {

  private url = environment.serverURL + 'suiviCampagneCampagnes/';

  constructor(private http: HttpClient) {
  }

  AddSuiviCampagneCampagne(suiviCampagneCampagne: SuiviCampagneCampagnes): Observable<SuiviCampagneCampagnes> {
    return this.http.post<SuiviCampagneCampagnes>(this.url + 'add', suiviCampagneCampagne);
  }

  getAllSuiviCampagneCampagne(): Observable<SuiviCampagneCampagnes> {
    return this.http.get<SuiviCampagneCampagnes>(this.url);
  }

  getSuiviCampagneCampagne(id): Observable<SuiviCampagneCampagnes> {
    return this.http.get<SuiviCampagneCampagnes>(this.url + id);
  }

  EditSuiviCampagneCampagne(id, suiviCampagneCampagne: SuiviCampagneCampagnes): Observable<SuiviCampagneCampagnes> {
    return this.http.put<SuiviCampagneCampagnes>(this.url + 'put/' + id, suiviCampagneCampagne);
  }

  DeleteSuiviCampagneCampagne(id): Observable<SuiviCampagneCampagnes> {
    return this.http.delete<SuiviCampagneCampagnes>(this.url + 'delete/' + id);
  }
}
