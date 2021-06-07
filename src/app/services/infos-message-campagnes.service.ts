import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InfosMessageCampagnes } from '../modele/infos-message-campagnes';


@Injectable({
  providedIn: 'root',
})
export class InfosMessageCampagnesService {

  private url = environment.serverURL + 'infosMessageCampagnes/';

  constructor(private http: HttpClient) {
  }

  AddInfosMessageCampagne(infosMessageCampagne: InfosMessageCampagnes): Observable<InfosMessageCampagnes> {
    return this.http.post<InfosMessageCampagnes>(this.url + 'add', infosMessageCampagne);
  }

  getAllInfosMessageCampagne(): Observable<InfosMessageCampagnes> {
    return this.http.get<InfosMessageCampagnes>(this.url);
  }

  getInfosMessageCampagne(id): Observable<InfosMessageCampagnes> {
    return this.http.get<InfosMessageCampagnes>(this.url + id);
  }

  EditInfosMessageCampagne(id, infosMessageCampagne: InfosMessageCampagnes): Observable<InfosMessageCampagnes> {
    return this.http.put<InfosMessageCampagnes>(this.url + 'put/' + id, infosMessageCampagne);
  }

  DeleteInfosMessageCampagne(id): Observable<InfosMessageCampagnes> {
    return this.http.delete<InfosMessageCampagnes>(this.url + 'delete/' + id);
  }
}
