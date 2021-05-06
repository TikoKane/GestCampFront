import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { Authentification } from '../modele/utilisateurs.model';
import { environment } from '../../environments/environment';


@Injectable()
export class AuthService {

  isLoggedIn = false;
  role: number;

  private url = environment.serverURL;

  // store the URL so we can redirect after logging in
  redirectUrl: string;  constructor(private myRoute: Router , private http: HttpClient, public router: Router) { }

  login(value: Authentification) {
    return this.http.post(this.url + 'utilisateurs/auth',value);
    }
    
    getToken() {
      return localStorage.getItem('jwt');
    }
    isLoggedInn() {
      return this.getToken() !== null;
    }
     
    saveToken(jwt: string,
            nom: string) {
    localStorage.setItem('jwt', jwt);
    localStorage.setItem('nomComplet', nom);
  /*  localStorage.setItem('prenom', prenom);
    localStorage.setItem('id', String(iduser));
    this.role = typeUser;
    if(typeUser === 1)
    {
      localStorage.setItem('typeUser', 'false');
    }
    else
    {
      localStorage.setItem('typeUser', 'true');
    }

    localStorage.setItem('idmagasin', String(idmagasin));
    localStorage.setItem('magasin', magasin);
*/
    this.isLoggedIn = true;
  }
  
   }/*
  isAdmin() {
    return this.role === 1;

  }
  isUser() {
    return this.role !== 1;
  }
  isAuthentificate() {
    return this.isLoggedIn;
  }

  // login(): Observable<boolean> {
  //   return of(true).pipe(
  //     delay(1000),
  //     tap(val => this.isLoggedIn = true)
  //   );
  // }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('nom');
    localStorage.removeItem('prenom');
    localStorage.removeItem('typeUser');
    localStorage.removeItem('etat');
    this.isLoggedIn = false;
    this.router.navigate(['login']);
  }

  
  logout2(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('prenom');
    localStorage.removeItem('typeUser');
    localStorage.removeItem('etat');
    this.isLoggedIn = false;
    this.router.navigate(['firstConnexion']);
  }
  sendToken(token: string) {
    localStorage.setItem('token', token);
  }
  getToken() {
    return localStorage.getItem('token');
  }
  isLoggedInn() {
    return this.getToken() !== null;
  }

}*/
