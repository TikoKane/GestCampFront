import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
<<<<<<< HEAD
import { NbToastrService,  NbComponentStatus,
  NbGlobalLogicalPosition,
  NbGlobalPhysicalPosition,
  NbGlobalPosition,
  NbToastrConfig, } from '@nebular/theme';
import { AddUser, UtilisateurModelServer } from '../../../modele/utilisateurs.model';
import { UtilisateursService } from '../../../services/utilisateurs.service';


=======
import { AddUser, UtilisateurModelServer } from '../../../modele/utilisateurs.model';
import { UtilisateursService } from '../../../services/utilisateurs.service';
import { NbComponentStatus, NbGlobalPhysicalPosition, NbGlobalPosition, NbToastrConfig, NbToastrService } from '@nebular/theme';
>>>>>>> 883326b75956340257501077c3438bd45baad99d

@Component({
  selector: 'ngx-addutilisateur',
  templateUrl: './addutilisateur.component.html',
  styleUrls: ['./addutilisateur.component.scss']
})
export class AddutilisateurComponent implements OnInit {
titre;
roles: any;
<<<<<<< HEAD

  constructor(private UtilisateursService: UtilisateursService,
              private router:Router,private toastrService: NbToastrService) {
  }

  config: NbToastrConfig;

  index = 1;
  destroyByClick = true;
  duration = 2000;
  hasIcon = true;
  position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
  preventDuplicates = false;
  status: NbComponentStatus = 'success';

  title = 'Ajout d\'un nouveau utilisateur !';
  content = `Utilisateur ajouté avec suucès!`;




  ngOnInit() {
=======
config: NbToastrConfig;

index = 1;
destroyByClick = true;
duration = 2000;
hasIcon = true;
position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
preventDuplicates = false;
status: NbComponentStatus = 'success';


title = 'Ajout d\'un nouveau utilisateur !';
content = `Utilisateur ajouté avec succès!`

  constructor(private UtilisateursService: UtilisateursService,
              private router:Router,
              private toastrService: NbToastrService) {
  }

  ngOnInit() {

>>>>>>> 883326b75956340257501077c3438bd45baad99d
    // Récupérer tous les roles
    this.UtilisateursService.getAllRole().subscribe((data) => {
      this.roles = data;
    }, (err) => {
      console.log(err);
    });

}



// Ajout d'un utilisateur
  user: AddUser = {
    email: '',
    telephone :'',
    idRole: '',
    login:'',
    nom :'',
<<<<<<< HEAD
    prenom :'',
    idEntite: localStorage.getItem('idEntite')
=======
    prenom :''
>>>>>>> 883326b75956340257501077c3438bd45baad99d
  };

  Ajout(form :NgForm){
    this.UtilisateursService.AddUtilisateur(this.user).subscribe((data) => {
<<<<<<< HEAD
    
    //  console.log(data)
      form.reset();
      this.ToastValide(this.status, this.title, this.content);
      this.router.navigateByUrl('pages/utilisateur/list')
=======
      this.ToastValide(this.status, this.title, this.content);
    
      console.log(data)
      form.reset();
>>>>>>> 883326b75956340257501077c3438bd45baad99d
    }, (err) => {
      console.log(this.user)
      console.log(err);
    });
<<<<<<< HEAD
=======
    this.router.navigateByUrl('pages/utilisateur/list')
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
>>>>>>> 883326b75956340257501077c3438bd45baad99d
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
