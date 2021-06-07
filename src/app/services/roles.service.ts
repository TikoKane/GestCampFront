import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Roles } from '../modele/roles';


@Injectable({
  providedIn: 'root',
})
export class RolesService {

  private url = environment.serverURL + 'roles/';

  constructor(private http: HttpClient) {
  }

  AddRole(role: Roles): Observable<Roles> {
    return this.http.post<Roles>(this.url + 'add', role);
  }

  getAllRole(): Observable<Roles> {
    return this.http.get<Roles>(this.url);
  }

  getRole(id): Observable<Roles> {
    return this.http.get<Roles>(this.url + id);
  }

  EditRole(id, role: Roles): Observable<Roles> {
    return this.http.put<Roles>(this.url + 'put/' + id, role);
  }

  DeleteRole(id): Observable<Roles> {
    return this.http.delete<Roles>(this.url + 'delete/' + id);
  }
}
