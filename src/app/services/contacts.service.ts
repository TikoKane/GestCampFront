import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { serverResponse } from '../modele/contacts.model';



@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private url = environment.serverURL;

  constructor(private http: HttpClient) {
  }


  getAllContact(): Observable<serverResponse> {
    return this.http.get<serverResponse>(this.url + 'contacts', {
    });
  }

    getAllRole(): Observable<serverResponse> {
    return this.http.get<serverResponse>(this.url + 'roles', {
    });
  }
  

}