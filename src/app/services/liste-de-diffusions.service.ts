import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Contacts} from '../modele/contacts';
import {ListeDeDiffusions} from '../modele/liste-De-Diffusions';
import { serverResponse } from '../modele/utilisateurs.model';


@Injectable({
  providedIn: 'root',
})
export class ListeDeDiffusionsService {

  private url = environment.serverURL + 'listeDeDiffusion/';

  constructor(private http: HttpClient) {
  }

  AddListeDeDiffusion(listeDeDiffusion: ListeDeDiffusions): Observable<ListeDeDiffusions> {
    return this.http.post<ListeDeDiffusions>(this.url + 'add', listeDeDiffusion);
  }

  GetAllListeDeDiffusions(idEntite): Observable<ListeDeDiffusions> {
    return this.http.get<ListeDeDiffusions>(this.url + 'all/' + idEntite);
  }
  getAllContact(): Observable<Contacts> {
    return this.http.get<Contacts>(this.url + "listeContacts");
  }

  getListeDeDiffusion(id): Observable<ListeDeDiffusions> {
    return this.http.get<ListeDeDiffusions>(this.url + id);
  }

  EditListeDeDiffusion(id, listeDeDiffusion: ListeDeDiffusions): Observable<ListeDeDiffusions> {
    return this.http.put<ListeDeDiffusions>(this.url + 'put/' + id, listeDeDiffusion);
  }

  DeleteListeDeDiffusion(id): Observable<ListeDeDiffusions> {
    return this.http.delete<ListeDeDiffusions>(this.url + 'delete/' + id);
  }
  changerStatutListediffusion(id): Observable<serverResponse> {
    return this.http.get<serverResponse>(this.url + 'changes/'+id, {
    });
  }
  GetDonneesContactByListeDiffusion(id): Observable<serverResponse> {
    return this.http.get<serverResponse>(this.url + 'donneescontact/'+id, {
    });
  }
}
