import { HttpClient, HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/do';
import { Authentification } from '../../modele/utilisateurs.model';
import { AuthService } from '../auth.service';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(public auth: AuthService, public router: Router, public authService: AuthService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request).do((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        // do stuff with response if you want
      }
    }, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          this.authService.logout();
        }
      }
    });
  }
}
@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  invalidLogin : Boolean;
  users;
  constructor(private router : Router,private authService : AuthService) { }

  ngOnInit(): void {
    this.authService.isLoggedIn =false;
  }
  login(form: NgForm){

   const credentials: Authentification= {
      login: form.value.login,
      password: form.value.password
    }
  this.authService.login(credentials).subscribe((data) => {
    this.users = data;
    console.log(this.users)
    this.authService.saveToken(this.users.token, this.users.user.id, this.users.user.idRole, this.users.user.nom, this.users.user.prenom, this.users.user.email,
      this.users.user.telephone, this.users.user.login, this.users.user.etat, this.users.user.statut)

    this.router.navigate(['pages']);
  }, (err) => {
   // this.router.navigate(['pages']);
    console.log(err);
   this.invalidLogin =true;
 form.resetForm();
   
  });
}
}
