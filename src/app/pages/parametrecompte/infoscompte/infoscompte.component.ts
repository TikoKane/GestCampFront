import { HttpClient, HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NbComponentStatus, NbGlobalPhysicalPosition, NbGlobalPosition, NbToastrConfig, NbToastrService } from '@nebular/theme';
import { ModalDismissReasons, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { AuthService } from '../../../auth/auth.service';
import { Authentification, ChangePassword } from '../../../modele/utilisateurs.model';
import { UtilisateursService } from "../../../services/utilisateurs.service";
import { ValidatorService } from '../../../shared/password.validator';



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
  selector: 'ngx-infoscompte',
  templateUrl: './infoscompte.component.html',
  styleUrls: ['./infoscompte.component.scss']
})
export class InfoscompteComponent implements OnInit {
  invalidLogin: Boolean;
  config: NbToastrConfig;
  users : any;
  model:any = {};
  infuser:any;
  index = 1;
  destroyByClick = true;
  duration = 2000;
  hasIcon = true;
  position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
  preventDuplicates = false;
  statusSupprim: NbComponentStatus = 'danger';
  status: NbComponentStatus = 'success';

  title = 'Modification mot de passe !';
  content = `Mot de passe modifié avec succès!`;

  titleMo = 'Modification mot de passe !';
  contentMo = `Erreur lors de la modification du mot de passe!`;

  constructor(private UtilisateursService: UtilisateursService,
              private fb: FormBuilder,
              private http: HttpClient,
              private toastrService: NbToastrService,
              private validatorService: ValidatorService,
              private authService: AuthService,
              private modalService: NgbModal,private UtilisateurService: UtilisateursService) { }

  ngOnInit(){
    this.authService.isLoggedIn = false;
    
    this.UtilisateurService.getUtilisateurById(localStorage.getItem("id")).subscribe((data) => {
      this.infuser = data;
    }, (err) => {
      console.log(err);
    });
  
   

}


ChangerMotDepasse(form: NgForm) {
  const userModel: ChangePassword = {
    Amp : form.value.amp,
    Nmp : form.value.nmp,
    Cnmp : form.value.cnmp
  }
 
  this.authService.changeMotDepass(userModel, localStorage.getItem("id")).subscribe((data) =>{
   form.reset();
    this.ToastValide(this.status, this.title, this.content);
  },(err) =>{
    this.ToastSuppression(this.statusSupprim, this.titleMo, this.contentMo);
    console.log(err);
    /*this.invalidLogin = true;*/
    console.log(err.error);
  });
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

private ToastSuppression(type: NbComponentStatus, title: string, body: string) {
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
private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return `with: ${reason}`;
  }
}

/*
onSubmit(){
  
 if (this.updatePasswordForm.valid) {
   this.UtilisateursService.getUtilisateurById(localStorage.getItem("id")).subscribe((result) =>{
     if (result.users) {
       let userDetails = this.updatePasswordForm.value;
       userDetails.users = result.users;
       this.UtilisateursService.changePassword(userDetails).subscribe(
         (result) =>{
           this.ToastValide(this.status, this.title, this.content);
         },
         (error) => this.ToastSuppression(this.statusSupprim, this.titleMo, this.contentMo)
       );
     }
   });
}
*/
}

