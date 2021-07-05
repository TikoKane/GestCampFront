import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TypeDeCampagnes} from '../modele/type-De-Campagnes';


@Injectable({
  providedIn: 'root',
})
export class TypeDeCampagnesService {

  private url = environment.serverURL + 'typeDeCampagnes/';

  constructor(private http: HttpClient) {
  }

  AddTypeDeCampagne(typeDeCampagne: TypeDeCampagnes): Observable<TypeDeCampagnes> {
    return this.http.post<TypeDeCampagnes>(this.url + 'add', typeDeCampagne);
  }

  getAllTypeDeCampagne(id): Observable<TypeDeCampagnes> {
    return this.http.get<TypeDeCampagnes>(this.url+'all/'+id);
  }

  getTypeDeCampagne(id): Observable<TypeDeCampagnes> {
    return this.http.get<TypeDeCampagnes>(this.url + id);
  }

  EditTypeDeCampagne(id, typeDeCampagne: TypeDeCampagnes): Observable<TypeDeCampagnes> {
    return this.http.put<TypeDeCampagnes>(this.url + 'put/' + id, typeDeCampagne);
  }

  DeleteTypeDeCampagne(id): Observable<TypeDeCampagnes> {
    return this.http.delete<TypeDeCampagnes>(this.url + 'delete/' + id);
  }
}
