import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal, NgbActiveModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AddUser } from '../../../modele/utilisateurs.model';
import { UtilisateursService } from '../../../services/utilisateurs.service';


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

  user: AddUser = {
    email: '',
    telephone :'',
    idRole: localStorage.getItem('idRole'),
    login:'',
    nom :'',
    prenom:'',
    idEntite : +localStorage.getItem('idEntite'),
  };
  constructor(private UtilisateursService: UtilisateursService,
              private router:Router,
              private modalService: NgbModal) {
  }

  ngOnInit() {
    this.UtilisateursService.GetAllUtilisateurs(localStorage.getItem('idEntite')).subscribe((data) => {
      this.users = data;
      console.log(this.users)
    }, (err) => {
      console.log(err);
    });

}
open(id) {
  console.log(id);
  this.UtilisateursService.getUtilisateurById(id).subscribe((data) => {
    this.datauser = data;
    this.datauser.Nom = data["nom"];
    this.datauser.Prenom = data["prenom"];
    this.datauser.Login = data["login"];
    this.datauser.Email = data["email"];
    this.datauser.Telephone = data["telephone"];
    console.log(this.datauser)
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
     this.UtilisateursService.GetAllUtilisateurs(localStorage.getItem('idEntite')).subscribe((data) => {
      this.users = data;
   //  console.log(this.users)
    }, (err) => {
      console.log(err);
    });
  }, (err) => {
    console.log(err);
  });

}

editUtilisateur(id , form: NgForm){
  console.log(this.user) 
  this.UtilisateursService.EditUtilisateur(id , this.user ).subscribe((data) => {
     console.log(data)
     this.UtilisateursService.GetAllUtilisateurs(localStorage.getItem('idEntite')).subscribe((data) => {
      this.users = data;
    console.log(this.users)
  }, (err) => {
    console.log(this.users)
    console.log(err);

});
  }, (err) => {
    console.log(err);
  });

}


supprimeruser(id){
  this.UtilisateursService.deleteUtilisateur(id).subscribe((data1) => {
     this.UtilisateursService.GetAllUtilisateurs(localStorage.getItem('idEntite')).subscribe((data) => {
      this.users = data;
    }, (err) => {
      console.log(err);
    });
  }, (err) => {
    console.log(err);
  });
}
}
