import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Modeles} from '../modele/modeles';


@Injectable({
  providedIn: 'root',
})
export class ModelesService {

  private url = environment.serverURL + 'modeles/';

  constructor(private http: HttpClient) {
  }

  AddModele(modele: Modeles): Observable<Modeles> {
    return this.http.post<Modeles>(this.url + 'add', modele);
  }

  getAllModele(id): Observable<Modeles> {
    return this.http.get<Modeles>(this.url+'all/'+id);
  }

  getModele(id): Observable<Modeles> {
    return this.http.get<Modeles>(this.url + id);
  }

  EditModele(id, modele: Modeles): Observable<Modeles> {
    return this.http.put<Modeles>(this.url + 'put/' + id, modele);
  }

  DeleteModele(id): Observable<Modeles> {
    return this.http.delete<Modeles>(this.url + 'delete/' + id);
  }

  
  changeEtatModele(id): Observable<Modeles> {
    return this.http.get<Modeles>(this.url + 'changeEtat/' + id);
  }
}
