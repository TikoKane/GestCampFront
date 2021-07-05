import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Contacts} from '../modele/contacts';
import {ContactCanals} from '../modele/contact-canals';
import { serverResponse } from '../modele/utilisateurs.model';


@Injectable({
  providedIn: 'root',
})
export class ContactsService {

  private url = environment.serverURL + 'contacts/';

  constructor(private http: HttpClient) {
  }

  AddContact(contact: Contacts): Observable<Contacts> {
    return this.http.post<Contacts>(this.url + 'add', contact);
  }

  GetContacts( idUser): Observable<Contacts> {
    return this.http.get<Contacts>(this.url+ 'all/' + idUser);
  }
 
  getAllContactCanal(): Observable<ContactCanals> {
    return this.http.get<ContactCanals>(this.url + 'CanalEnvoi');
  }

  getContactCanal(id): Observable<ContactCanals> {
    return this.http.get<ContactCanals>(this.url + 'contactcanal' + id);
  }

  getAllContact(id): Observable<Contacts> {
    return this.http.get<Contacts>(this.url+'all/'+id);
  }  

  DeleteContactCanal(id): Observable<ContactCanals> {
    return this.http.delete<ContactCanals>(this.url + 'contactcanal/delete/' + id);
  }

  getContactById(id): Observable<Contacts> {
    return this.http.get<Contacts>(this.url + id);
  }
  changerStatutContact(id): Observable<serverResponse> {
    return this.http.get<serverResponse>(this.url + 'changes/'+id, {
    });
  }


  EditContact(id, contact: Contacts): Observable<Contacts> {
    return this.http.put<Contacts>(this.url + 'put/' + id, contact);
  }

  DeleteContact(id): Observable<Contacts> {
    return this.http.delete<Contacts>(this.url + 'delete/' + id);
  }
}
