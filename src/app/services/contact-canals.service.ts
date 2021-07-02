import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ContactCanals} from '../modele/contact-canals';


@Injectable({
  providedIn: 'root',
})
export class ContactCanalsService {

  private url = environment.serverURL + 'contactCanalEnvois/';

  constructor(private http: HttpClient) {
  }

  AddContactCanal(contactCanal: ContactCanals): Observable<ContactCanals> {
    return this.http.post<ContactCanals>(this.url + 'add', contactCanal);
  }

  getAllContactCanal(): Observable<ContactCanals> {
    return this.http.get<ContactCanals>(this.url);
  }

  getContactCanal(id): Observable<ContactCanals> {
    return this.http.get<ContactCanals>(this.url + id);
  }

  EditContactCanal(id, contactCanal: ContactCanals): Observable<ContactCanals> {
    return this.http.put<ContactCanals>(this.url + 'put/' + id, contactCanal);
  }

  DeleteContactCanal(id): Observable<ContactCanals> {
    return this.http.delete<ContactCanals>(this.url + 'delete/' + id);
  }
}
