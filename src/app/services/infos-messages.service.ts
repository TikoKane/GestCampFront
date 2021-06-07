import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InfosMessages } from '../modele/infos-messages';


@Injectable({
  providedIn: 'root',
})
export class InfosMessagesService {

  private url = environment.serverURL + 'infosMessages/';

  constructor(private http: HttpClient) {
  }

  AddInfosMessage(infosMessage: InfosMessages): Observable<InfosMessages> {
    return this.http.post<InfosMessages>(this.url + 'add', infosMessage);
  }

  getAllInfosMessage(): Observable<InfosMessages> {
    return this.http.get<InfosMessages>(this.url);
  }

  getInfosMessage(id): Observable<InfosMessages> {
    return this.http.get<InfosMessages>(this.url + id);
  }

  EditInfosMessage(id, infosMessage: InfosMessages): Observable<InfosMessages> {
    return this.http.put<InfosMessages>(this.url + 'put/' + id, infosMessage);
  }

  DeleteInfosMessage(id): Observable<InfosMessages> {
    return this.http.delete<InfosMessages>(this.url + 'delete/' + id);
  }
}
