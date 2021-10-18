import { HttpClient, HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NbComponentStatus, NbGlobalPhysicalPosition, NbGlobalPosition, NbToastrConfig, NbToastrService } from '@nebular/theme';
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

  closeResult:string;
config: NbToastrConfig;
index = 1;
destroyByClick = true;
duration = 2000;
hasIcon = true;
position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
preventDuplicates = false;

statusNoValide: NbComponentStatus = 'danger';
titleNoValide = 'Votre compte a été bloqué !';
contentNoValide = `Echec lors de la connexion`;

status: NbComponentStatus = 'success';
title = 'Connexion réussie avec succès !';
content = `Connexion au compte!`;


  invalidLogin: Boolean;
  users;
  changemdpfirst: Boolean = false;
  constructor(private toastrService: NbToastrService,private router: Router, private authService: AuthService, private modalService: NgbModal) { }

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
        if (this.users.user.statut == true) {
        this.authService.saveToken(this.users.token, this.users.user.id, this.users.user.idRole, this.users.user.nom, this.users.user.prenom, this.users.user.email,
          this.users.user.telephone, this.users.user.login, this.users.user.idEntite, this.users.user.etat, this.users.user.statut)
          this.ToastValide(this.status,this.title,this.content);
          this.router.navigate(['pages/accueil/d3']);
      }
      else {
        form.reset();
        this.ToastValideNoValide(this.statusNoValide,this.titleNoValide,this.contentNoValide);
             
      }
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

  private ToastValideNoValide(type: NbComponentStatus, title: string, body: string) {
    const config = {
      status: type,
      destroyByClick: this.destroyByClick,
      duration: this.duration,
      hasIcon: this.hasIcon,
      position: this.position,
      preventDuplicates: this.preventDuplicates,
    };
    const titleContent = title ? `${title}` : '';
  
    this.index += 1;
    this.toastrService.show(
      body,
      `${titleContent}`,
      config);
  }


    private ToastValide(type: NbComponentStatus, title: string, body: string) {
    const config = {
      status: type,
      destroyByClick: this.destroyByClick,
      duration: this.duration,
      hasIcon: this.hasIcon,
      position: this.position,
      preventDuplicates: this.preventDuplicates,
    };
    const titleContent = title ? `${title}` : '';

    this.index += 1;
    this.toastrService.show(
      body,
      `${titleContent}`,
      config);
  }
}
