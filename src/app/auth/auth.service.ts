import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { Authentification, Changerpassword } from '../modele/utilisateurs.model';
import { environment } from '../../environments/environment';


@Injectable()
export class AuthService {

  isLoggedIn = false;
  role: number;

  private url = environment.serverURL;

  // store the URL so we can redirect after logging in
  redirectUrl: string;  
  constructor(private myRoute: Router ,
     private http: HttpClient, 
     public router: Router) { }

  login(value: Authentification) {
    return this.http.post(this.url + 'utilisateurs/auth',value);
    }

    changeMdp(value : Changerpassword,id){
      return this.http.put(this.url+'utilisateurs/changepassword/'+id,value)
    }
    
  
    logout(): void {
      localStorage.removeItem('token');
      localStorage.removeItem('nom');
      localStorage.removeItem('prenom');
      localStorage.removeItem('email');
      localStorage.removeItem('telephone');
      localStorage.removeItem('login');
      localStorage.removeItem('id');
      localStorage.removeItem('etat');
      localStorage.removeItem('statut');
      localStorage.removeItem('idRole');
      localStorage.removeItem('idEntite');
      this.isLoggedIn = false;
      this.router.navigate(['']);
    }
    saveToken(token: string, id :number,idRole: number,
            nom: string, prenom: string,email: string, telephone: string,login: string,idEntite :number, etat: number,statut: number) {
    localStorage.setItem('token', token);
    localStorage.setItem('id', String(id));
    localStorage.setItem("idRole",String(idRole));
    localStorage.setItem('nom', nom);
    localStorage.setItem('prenom', prenom);
    localStorage.setItem('email', email);
    localStorage.setItem('telephone', telephone);
    localStorage.setItem('login', login);
    localStorage.setItem('idEntite',String(idEntite))
    localStorage.setItem('etat', String(etat));
    localStorage.setItem('statut', String(statut));
  


    this.isLoggedIn = true;
  }
  
   
  isAdmin() {
    return this.role === 1;

  }
  isEditeur() {
    return this.role == 2;
  }
  isTroisieme() {
    return this.role == 3;
  }
  isAuthentificate() {
    return this.isLoggedIn;
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
}
