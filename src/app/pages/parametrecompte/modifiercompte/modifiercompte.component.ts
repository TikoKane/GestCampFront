import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Component, OnInit, Injectable } from '@angular/core';
import { ValidatorService } from '../../../shared/password.validator';
import { NbComponentStatus, NbGlobalPhysicalPosition, NbGlobalPosition, NbToastrConfig, NbToastrService } from '@nebular/theme';
import { UtilisateursService } from '../../../services/utilisateurs.service';
import { NgbModal, NgbActiveModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/do';
import { AuthService } from '../../../auth/auth.service';
import { Authentification, ChangePassword } from '../../../modele/utilisateurs.model';


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
  selector: 'ngx-modifiercompte',
  templateUrl: './modifiercompte.component.html',
  styleUrls: ['./modifiercompte.component.scss']
})
export class ModifiercompteComponent implements OnInit {

  invalidLogin: Boolean;
  config: NbToastrConfig;
  users : any;
  model:any = {};

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
  contentMo = `Mot de passe modifié sans succès!`;

  constructor(private UtilisateursService: UtilisateursService,
              private fb: FormBuilder,
              private http: HttpClient,
              private toastrService: NbToastrService,
              private validatorService: ValidatorService,
              private authService: AuthService,
              private modalService: NgbModal) { }

  ngOnInit(){
    this.authService.isLoggedIn = false;
    
    
    /*
    this.oldPassword = new FormControl('', [Validators.required]);
    this.newPassword = new FormControl('', [Validators.required, Validators.maxLength(15), Validators.minLength(8)]);
    this.cnewPassword = new FormControl('', [Validators.required]);

    this.updatePasswordForm = this.fb.group({
        oldPassword: this.oldPassword,
        newPassword: this.newPassword,
        cnewPassword: this.cnewPassword
    })
    */

}
login(form: NgForm){
  const UserModel: Authentification = {
    login: form.value.login,
    password: form.value.password
  }
  this.authService.login(UserModel).subscribe((data)=>{

    this.users = data;
    
    if(this.users.user.ischange == true){
      console.log(this.users);
      this.authService.saveToken(this.users.token, this.users.user.id, this.users.user.idRole, this.users.user.nom, this.users.user.prenom, this.users.user.email,
        this.users.user.telephone, this.users.user.login, this.users.user.etat, this.users.user.statut)
    }
  }, (err)=>{
    console.log(err);
    form.resetForm();
  });
}


ChangerMotDepasse(form: NgForm) {
  const userModel: ChangePassword = {
    Amp : form.value.amp,
    Nmp : form.value.nmp,
    Cnmp : form.value.cnmp
  }
 
  this.authService.changeMotDepass(userModel, localStorage.getItem("id")).subscribe((data) =>{
   
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
