import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {NiveauDeVisibilites} from '../modele/niveau-De-Visibilites';


@Injectable({
  providedIn: 'root',
})
export class NiveauDeVisibilitesService {

  private url = environment.serverURL + 'niveauDeVisibilites/';

  constructor(private http: HttpClient) {
  }

  AddNiveauDeVisibilite(niveauDeVisibilite: NiveauDeVisibilites): Observable<NiveauDeVisibilites> {
    return this.http.post<NiveauDeVisibilites>(this.url + 'add', niveauDeVisibilite);
  }

  getAllNiveauDeVisibilite(): Observable<NiveauDeVisibilites> {
    return this.http.get<NiveauDeVisibilites>(this.url);
  }

  getNiveauDeVisibilite(id): Observable<NiveauDeVisibilites> {
    return this.http.get<NiveauDeVisibilites>(this.url + id);
  }

  EditNiveauDeVisibilite(id, niveauDeVisibilite: NiveauDeVisibilites): Observable<NiveauDeVisibilites> {
    return this.http.put<NiveauDeVisibilites>(this.url + 'put/' + id, niveauDeVisibilite);
  }

  DeleteNiveauDeVisibilite(id): Observable<NiveauDeVisibilites> {
    return this.http.delete<NiveauDeVisibilites>(this.url + 'delete/' + id);
  }
}
