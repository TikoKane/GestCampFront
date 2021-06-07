import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContactListeDiffusions } from '../modele/contact-liste-diffusions';


@Injectable({
  providedIn: 'root',
})
export class ContactListeDiffusionsService {

  private url = environment.serverURL + 'contactListeDiffusions/';

  constructor(private http: HttpClient) {
  }

  AddContactListeDiffusion(contactListeDiffusion: ContactListeDiffusions): Observable<ContactListeDiffusions> {
    return this.http.post<ContactListeDiffusions>(this.url + 'add', contactListeDiffusion);
  }

  getAllContactListeDiffusion(): Observable<ContactListeDiffusions> {
    return this.http.get<ContactListeDiffusions>(this.url);
  }

  getContactListeDiffusion(id): Observable<ContactListeDiffusions> {
    return this.http.get<ContactListeDiffusions>(this.url + id);
  }

  EditContactListeDiffusion(id, contactListeDiffusion: ContactListeDiffusions): Observable<ContactListeDiffusions> {
    return this.http.put<ContactListeDiffusions>(this.url + 'put/' + id, contactListeDiffusion);
  }

  DeleteContactListeDiffusion(id): Observable<ContactListeDiffusions> {
    return this.http.delete<ContactListeDiffusions>(this.url + 'delete/' + id);
  }
}
