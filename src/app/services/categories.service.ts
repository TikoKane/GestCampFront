import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Categories} from '../modele/categories';


@Injectable({
  providedIn: 'root',
})
export class CategoriesService {

  private url = environment.serverURL + 'categories/';

  constructor(private http: HttpClient) {
  }

  AddCategorie(categorie: Categories): Observable<Categories> {
    return this.http.post<Categories>(this.url + 'add', categorie);
  }

  getAllCategorie(): Observable<Categories> {
    return this.http.get<Categories>(this.url);
  }

  getCategorie(id): Observable<Categories> {
    return this.http.get<Categories>(this.url + id);
  }

  EditCategorie(id, categorie: Categories): Observable<Categories> {
    return this.http.put<Categories>(this.url + 'put/' + id, categorie);
  }

  DeleteCategorie(id): Observable<Categories> {
    return this.http.delete<Categories>(this.url + 'delete/' + id);
  }
}
