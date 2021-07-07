import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ListeDeDiffusions, UpdateListeDeDiffusions} from '../modele/liste-De-Diffusions';


@Injectable({
  providedIn: 'root',
})
export class ListeDeDiffusionsService {

  private url = environment.serverURL + 'listedediffusion/';

  constructor(private http: HttpClient) {
  }

  AddListeDeDiffusion(listeDeDiffusion: ListeDeDiffusions): Observable<ListeDeDiffusions> {
    return this.http.post<ListeDeDiffusions>(this.url + 'add', listeDeDiffusion);
  }

  getAllListeDeDiffusion(id): Observable<ListeDeDiffusions> {
    return this.http.get<ListeDeDiffusions>(this.url+'all/'+id);
  }

  getListeDeDiffusion(id): Observable<ListeDeDiffusions> {
    return this.http.get<ListeDeDiffusions>(this.url + id);
  }

  EditListeDeDiffusion(id, listeDeDiffusion: UpdateListeDeDiffusions): Observable<ListeDeDiffusions> {
    return this.http.put<ListeDeDiffusions>(this.url + 'put/' + id, listeDeDiffusion);
  }

  DeleteListeDeDiffusion(id): Observable<ListeDeDiffusions> {
    return this.http.delete<ListeDeDiffusions>(this.url + 'delete/' + id);
  }

  changeEtatListeDeDiffusion(id): Observable<ListeDeDiffusions> {
    return this.http.get<ListeDeDiffusions>(this.url + 'changeEtat/' + id);
  }
}
