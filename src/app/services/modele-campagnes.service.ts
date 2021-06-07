import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ModeleCampagnes } from '../modele/modele-Campagnes';


@Injectable({
  providedIn: 'root',
})
export class ModeleCampagnesService {

  private url = environment.serverURL + 'modeleCampagnes/';

  constructor(private http: HttpClient) {
  }

  AddModeleCampagne(modeleCampagne: ModeleCampagnes): Observable<ModeleCampagnes> {
    return this.http.post<ModeleCampagnes>(this.url + 'add', modeleCampagne);
  }

  getAllModeleCampagne(): Observable<ModeleCampagnes> {
    return this.http.get<ModeleCampagnes>(this.url);
  }

  getModeleCampagne(id): Observable<ModeleCampagnes> {
    return this.http.get<ModeleCampagnes>(this.url + id);
  }

  EditModeleCampagne(id, modeleCampagne: ModeleCampagnes): Observable<ModeleCampagnes> {
    return this.http.put<ModeleCampagnes>(this.url + 'put/' + id, modeleCampagne);
  }

  DeleteModeleCampagne(id): Observable<ModeleCampagnes> {
    return this.http.delete<ModeleCampagnes>(this.url + 'delete/' + id);
  }
}
