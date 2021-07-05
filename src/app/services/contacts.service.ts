import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Contacts, UpdateContact } from  '../modele/contacts';
import { AddContact, serverResponse } from '../modele/contacts.model';



@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private url = environment.serverURL + 'contacts/';

  constructor(private http: HttpClient) {
  }


  changerStatutUtilisateur(id): Observable<Contacts> {
    return this.http.get<Contacts>(this.url + 'changestatut/'+id, {
    });
  }


  getAllContact(id): Observable<Contacts> {
    return this.http.get<Contacts>(this.url+'allwithcanal/'+id);
  }  

  getAllContactByListeDiffusion(id,idliste): Observable<Contacts> {
    return this.http.get<Contacts>(this.url+'contactsByListeDiff/'+id+'/'+idliste);
  }
  getContactById(id): Observable<Contacts> {
    return this.http.get<Contacts>(this.url+ id);
  }

  changerStatutContact(id): Observable<serverResponse> {
    return this.http.get<serverResponse>(this.url + 'changestatut/'+id);
  }

    getAllRole(): Observable<serverResponse> {
    return this.http.get<serverResponse>(this.url + 'roles');
  }
  
  AddContact(contact :Contacts): Observable<Contacts> {
    return this.http.post<Contacts>(this.url + 'add/',contact);
  }
  DeleteContact(id): Observable<Contacts> {
    return this.http.delete<Contacts>(this.url + 'delete/' + id);
  }
  UpdateContact(id, contact: UpdateContact){
    return this.http.put(this.url + 'put/' + id, contact);
  }

}
