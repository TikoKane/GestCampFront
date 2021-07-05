import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal, NgbActiveModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
<<<<<<< HEAD
import { AddUser, UpdateUser, UserModel } from '../../../modele/utilisateurs.model';
=======
import { AddUser, UpdateUser } from '../../../modele/utilisateurs.model';
>>>>>>> 883326b75956340257501077c3438bd45baad99d
import { UtilisateursService } from '../../../services/utilisateurs.service';
import { NbComponentStatus, NbGlobalPhysicalPosition, NbGlobalPosition, NbToastrConfig, NbToastrService } from '@nebular/theme';




@Component({
  selector: 'ngx-listutilisateur',
  templateUrl: './listutilisateur.component.html',
  styleUrls: ['./listutilisateur.component.scss']
})

export class ListutilisateurComponent implements OnInit{

  users: any;
  datauser: any;
  closeResult:string;
  tiko :any;
  roles: any;
<<<<<<< HEAD
  idUser = localStorage.getItem("id")
=======
  idUser = localStorage.getItem("id");

  config: NbToastrConfig;
    
  index = 1;
  destroyByClick = true;
  duration = 2000;
  hasIcon = true;
  position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
  preventDuplicates = false;
  statusSupprim: NbComponentStatus = 'danger';
  status: NbComponentStatus = 'success';
  
  titleSupprim = 'Supression d\'un utilisateur !';
  contentSupprim = `Utilisateur supprimé avec succès!`;

  title = 'Modification d\'un utilisateur !';
  content = `Utilisateur modifié avec succès!`;


 
  
>>>>>>> 883326b75956340257501077c3438bd45baad99d

  user: UpdateUser = {
    email: '',
    telephone :'',
    idRole: 0,
    login:'',
    nom :'',
    prenom :'',
    etat : true,
    statut:true,
    password :'passer',
<<<<<<< HEAD
    confirmPassword:'passer',
    idEntite:localStorage.getItem('idEntite')
  };

  userModel: UserModel;
=======
    confirmPassword:'passer'
  };

>>>>>>> 883326b75956340257501077c3438bd45baad99d
  editForm: FormGroup;
  constructor(private UtilisateursService: UtilisateursService,
              private router:Router,
              private modalService: NgbModal,
              private fb : FormBuilder,
<<<<<<< HEAD
              private http: HttpClient) {
=======
              private http: HttpClient,
              private toastrService: NbToastrService) {
>>>>>>> 883326b75956340257501077c3438bd45baad99d
  }

  ngOnInit() {
    this.UtilisateursService.getAllUtilisateur(localStorage.getItem('idEntite')).subscribe((data) => {
      this.users = data;
<<<<<<< HEAD
=======
      console.log(this.idUser)
      console.log(this.users)
    }, (err) => {
      console.log(err);
    });

    this.UtilisateursService.getAllRole().subscribe((data) => {
      this.roles = data;
>>>>>>> 883326b75956340257501077c3438bd45baad99d
    }, (err) => {
      console.log(err);
    });

    this.UtilisateursService.getAllRole().subscribe((data) => {
      this.roles = data;
    }, (err) => {
      console.log(err);
    });

}


open(id) {
this.UtilisateursService.getUtilisateurById(id).subscribe((data) => {
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

<<<<<<< HEAD
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
  
  console.log(form);
  console.log(this.user)
  this.UtilisateursService.UpdateUtilisateur(id,this.user).subscribe((data1) => {
    console.log(data1)
    this.UtilisateursService.getAllUtilisateur(localStorage.getItem('idEntite')).subscribe((data) => {
     this.users = data;
   }, (err) => {
     console.log(err);
   });
 }, (err) => {
   console.log(err);
 });
}

=======

open(id) {
console.log(id);
this.UtilisateursService.getUtilisateurById(id).subscribe((data) => {
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
>>>>>>> 883326b75956340257501077c3438bd45baad99d
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
   this.UtilisateursService.getAllUtilisateur().subscribe((data) => {
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
  this.ToastSuppression(this.statusSupprim, this.titleSupprim, this.contentSupprim);
   this.UtilisateursService.getAllUtilisateur().subscribe((data) => {
    this.users = data;
  }, (err) => {
    console.log(err);
  });
}, (err) => {
  console.log(err);
});
this.router.navigateByUrl('pages/utilisateur/list');
}

saveModification(id,form :NgForm){
  
  console.log(form);
  console.log(this.user)
  this.UtilisateursService.UpdateUtilisateur(id,this.user).subscribe((data1) => {
    this.ToastValide(this.status, this.title, this.content);
    console.log(data1);
    this.UtilisateursService.getAllUtilisateur().subscribe((data) => {
     this.users = data;
   }, (err) => {
     console.log(err);
   });
 }, (err) => {
   console.log(err);
 });
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