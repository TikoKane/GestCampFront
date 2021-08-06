import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Contacts, ContactsUpdate} from '../modele/contacts';


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

  changerStatutContactt(id): Observable<Contacts> {
    return this.http.get<Contacts>(this.url + 'changestatut/'+id, {
    });
  }


  getAllContact(id): Observable<Contacts> {
    return this.http.get<Contacts>(this.url+'all/'+id);
  }  

  getAllContactByListeDiffusion(id,idliste): Observable<Contacts> {
    return this.http.get<Contacts>(this.url+'contactsByListeDiff/'+id+'/'+idliste);
  }

  getContact(id): Observable<Contacts> {
    return this.http.get<Contacts>(this.url + id);
  }


  EditContact(id, contact: ContactsUpdate): Observable<ContactsUpdate> {
    return this.http.put<ContactsUpdate>(this.url + 'put/' + id, contact);
  }

  DeleteContact(id): Observable<Contacts> {
    return this.http.delete<Contacts>(this.url + 'delete/' + id);
  }
}
