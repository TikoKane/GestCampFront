import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Variables} from '../modele/variables';


@Injectable({
  providedIn: 'root',
})
export class VariablesService {

  private url = environment.serverURL + 'variables/';

  constructor(private http: HttpClient) {
  }

  AddVariable(variable: Variables): Observable<Variables> {
    return this.http.post<Variables>(this.url + 'add', variable);
  }

  getAllVariable(): Observable<Variables> {
    return this.http.get<Variables>(this.url);
  }

  getVariable(id): Observable<Variables> {
    return this.http.get<Variables>(this.url + id);
  }

  EditVariable(id, variable: Variables): Observable<Variables> {
    return this.http.put<Variables>(this.url + 'put/' + id, variable);
  }

  DeleteVariable(id): Observable<Variables> {
    return this.http.delete<Variables>(this.url + 'delete/' + id);
  }
}
