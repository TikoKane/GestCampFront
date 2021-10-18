import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NbToastrService,  NbComponentStatus,
  NbGlobalPhysicalPosition,
  NbGlobalPosition,
  NbToastrConfig, } from '@nebular/theme';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddUser, UpdateUser, UserModel, UtilisateurModelServer } from '../../../modele/utilisateurs.model';
import { UtilisateursService } from '../../../services/utilisateurs.service';



@Component({
  selector: 'ngx-addutilisateur',
  templateUrl: './addutilisateur.component.html',
  styleUrls: ['./addutilisateur.component.scss']
})
export class AddutilisateurComponent implements OnInit {
titre;
roles: any;

users: any;
datauser: any;
closeResult:string;
tiko :any;
idUser = localStorage.getItem("id");
searchedKeyword: string;
p:number=1;

userUp: UpdateUser = {
  email: '',
  telephone :'',
  idRole: 0,
  login:'',
  nom :'',
  prenom :'',
  etat : true,
  statut:true,
  password :'passer',
  confirmPassword:'passer',
  idEntite:localStorage.getItem('idEntite')
};

userModel: UserModel;
editForm: FormGroup;

  constructor(private UtilisateursService: UtilisateursService,
              private router:Router,private toastrService: NbToastrService,  private modalService: NgbModal,) {
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

  statusD: NbComponentStatus = 'danger';
  titleD = 'Ajout d\'un nouveau utilisateur !';
  contentD = `Error lors de l'ajouté d'un nouveau utilisateur!`;

  statusModif: NbComponentStatus = 'success';
  titleModif = 'Modification d\'un nouveau utilisateur !';
  contentModif = `Utilisateur modifié avec suucès!`;
  
  statusED: NbComponentStatus = 'danger';
  titleED = 'Modification d\'un nouveau utilisateur !';
  contentED = `Error lors de la modification d'un nouveau utilisateur!`;


  ngOnInit() {
    this.UtilisateursService.getAllUtilisateur(localStorage.getItem('idEntite')).subscribe((data) => {
      this.users = data;
    }, (err) => {
      console.log(err);
    });
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
    prenom :'',
    idEntite:localStorage.getItem('idEntite')
  };

  Ajout(form :NgForm){
    this.UtilisateursService.AddUtilisateur(this.user).subscribe((data) => {
    
    //  console.log(data)
      form.reset();
      this.ToastValide(this.status, this.title, this.content);
      this.router.navigateByUrl('pages/utilisateur/list')
    }, (err) => {
      this.ToastValide(this.statusD, this.titleD, this.contentD);
      console.log(err);
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


  
open(id) {
  this.UtilisateursService.getUtilisateurById(id).subscribe((data) => {
    console.log(data)
    this.datauser = data;
    this.user.email=data['email'];
    this.user.idRole=data['idRole'];
    this.user.nom=data['nom'];
    this.user.prenom=data['prenom'];
    this.user.login=data['login'];
    this.user.telephone=data['telephone'];
  }, (err) => {
    console.log(err);
  });
  this.modalService.open( {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
    
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
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
  
  changestatut(id){
  this.UtilisateursService.changerStatutUtilisateur(id).subscribe((data) => {
     console.log(data)
     this.UtilisateursService.getAllUtilisateur(localStorage.getItem('idEntite')).subscribe((data) => {
      this.users = data;
   //  console.log(this.users)
    }, (err) => {
      console.log(err);
    });
  }, (err) => {
    console.log(err);
  });
  
  }
  
  supprimeruser(id){
  this.UtilisateursService.deleteUtilisateur(id).subscribe((data1) => {
     this.UtilisateursService.getAllUtilisateur(localStorage.getItem('idEntite')).subscribe((data) => {
      this.users = data;
    }, (err) => {
      console.log(err);
    });
  }, (err) => {
    console.log(err);
  });
  }
  
  saveModification(id,form :NgForm){
   
    
    this.UtilisateursService.UpdateUtilisateur(id,this.user).subscribe((data1) => {
      this.ToastValide(this.statusModif, this.titleModif, this.contentModif);
      this.UtilisateursService.getAllUtilisateur(localStorage.getItem('idEntite')).subscribe((data) => {
       this.users = data;
     }, (err) => {
      this.ToastValide(this.statusED, this.titleED, this.contentED);
     });
   }, (err) => {
     console.log(err);
   });
  }
}
