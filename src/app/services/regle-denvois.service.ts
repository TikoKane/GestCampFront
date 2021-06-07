import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegleDEnvois } from '../modele/regle-D-Envois';


@Injectable({
  providedIn: 'root',
})
export class RegleDEnvoisService {

  private url = environment.serverURL + 'regleDEnvois/';

  constructor(private http: HttpClient) {
  }

  AddRegleDEnvoi(regleDEnvoi: RegleDEnvois): Observable<RegleDEnvois> {
    return this.http.post<RegleDEnvois>(this.url + 'add', regleDEnvoi);
  }

  getAllRegleDEnvoi(): Observable<RegleDEnvois> {
    return this.http.get<RegleDEnvois>(this.url);
  }

  getRegleDEnvoi(id): Observable<RegleDEnvois> {
    return this.http.get<RegleDEnvois>(this.url + id);
  }

  EditRegleDEnvoi(id, regleDEnvoi: RegleDEnvois): Observable<RegleDEnvois> {
    return this.http.put<RegleDEnvois>(this.url + 'put/' + id, regleDEnvoi);
  }

  DeleteRegleDEnvoi(id): Observable<RegleDEnvois> {
    return this.http.delete<RegleDEnvois>(this.url + 'delete/' + id);
  }
}
