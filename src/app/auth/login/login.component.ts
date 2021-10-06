import { HttpClient, HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/do';
import { Authentification, Changerpassword } from '../../modele/utilisateurs.model';
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
  invalidLogin: Boolean;
  users;
  closeResult = '';
  changemdpfirst: Boolean = false;
  constructor(private router: Router, private authService: AuthService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.authService.isLoggedIn = false;
  }
  login(form: NgForm, content) {

    const credentials: Authentification = {
      login: form.value.login,
      password: form.value.password
    }


    this.authService.login(credentials).subscribe((data) => {
      this.users = data;

      if (this.users.user.ischange == true) {
        console.log(this.users)
        this.authService.saveToken(this.users.token, this.users.user.id, this.users.user.idRole, this.users.user.nom, this.users.user.prenom, this.users.user.email,
          this.users.user.telephone, this.users.user.login, this.users.user.idEntite, this.users.user.etat, this.users.user.statut)

        this.router.navigate(['pages/accueil/d3']);
      }

      else {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
          this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });

      
      }


    }, (err) => {

      console.log(err);
      this.invalidLogin = true;
      form.resetForm();

    });
  }
  changeMdp(form: NgForm) {
    const credentialsUpdatePsw: Changerpassword = {
      Amp: form.value.amp,
      Nmp: form.value.nmp,
      Cnmp: form.value.cnmp
    }
    console.log(this.users.user.id)
    this.authService.changeMdp(credentialsUpdatePsw, this.users.user.id).subscribe((data) => {
   
      this.authService.saveToken(this.users.token, this.users.user.id, this.users.user.idRole, this.users.user.nom, this.users.user.prenom, this.users.user.email,
        this.users.user.telephone, this.users.user.login, this.users.user.idEntite,this.users.user.etat, this.users.user.statut)

      this.router.navigate(['pages/utilisateur/list']);
    }, (err) => {
      console.log(err)
      console.log(err.error)

    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
