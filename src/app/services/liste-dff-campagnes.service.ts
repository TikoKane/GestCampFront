import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListeDffCampagnes } from '../modele/liste-Dff-Campagnes';


@Injectable({
  providedIn: 'root',
})
export class ListeDffCampagnesService {

  private url = environment.serverURL + 'listeDffCampagnes/';

  constructor(private http: HttpClient) {
  }

  AddListeDffCampagne(listeDffCampagne: ListeDffCampagnes): Observable<ListeDffCampagnes> {
    return this.http.post<ListeDffCampagnes>(this.url + 'add', listeDffCampagne);
  }

  getAllListeDffCampagne(): Observable<ListeDffCampagnes> {
    return this.http.get<ListeDffCampagnes>(this.url);
  }

  getListeDffCampagne(id): Observable<ListeDffCampagnes> {
    return this.http.get<ListeDffCampagnes>(this.url + id);
  }

  EditListeDffCampagne(id, listeDffCampagne: ListeDffCampagnes): Observable<ListeDffCampagnes> {
    return this.http.put<ListeDffCampagnes>(this.url + 'put/' + id, listeDffCampagne);
  }

  DeleteListeDffCampagne(id): Observable<ListeDffCampagnes> {
    return this.http.delete<ListeDffCampagnes>(this.url + 'delete/' + id);
  }
}
