import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { CanalEnvois } from '../modele/canal-envois';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CanalEnvoisService {

  private url = environment.serverURL + 'canalEnvois/';

  constructor(private http: HttpClient) {
  }

  AddCanalEnvoi(canalEnvoi: CanalEnvois): Observable<CanalEnvois> {
    return this.http.post<CanalEnvois>(this.url + 'add', canalEnvoi);
  }

  getAllCanalEnvoi(): Observable<CanalEnvois> {
    return this.http.get<CanalEnvois>(this.url);
  }

  getCanalEnvoi(id): Observable<CanalEnvois> {
    return this.http.get<CanalEnvois>(this.url + id);
  }

  EditCanalEnvoi(id, canalEnvoi: CanalEnvois): Observable<CanalEnvois> {
    return this.http.put<CanalEnvois>(this.url + 'put/' + id, canalEnvoi);
  }

  DeleteCanalEnvoi(id): Observable<CanalEnvois> {
    return this.http.delete<CanalEnvois>(this.url + 'delete/' + id);
  }
}
