<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal, NgbActiveModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AddUser } from '../../../modele/utilisateurs.model';
=======
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal, NgbActiveModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AddUser, UpdateUser, UserModel } from '../../../modele/utilisateurs.model';
>>>>>>> 7c99457fcc21780c95ee36928f9e73464084d1af
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
<<<<<<< HEAD

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
=======
  roles: any;
  idUser = localStorage.getItem("id")

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
    confirmPassword:'passer',
    idEntite:localStorage.getItem('idEntite')
  };

  userModel: UserModel;
  editForm: FormGroup;
  constructor(private UtilisateursService: UtilisateursService,
              private router:Router,
              private modalService: NgbModal,
              private fb : FormBuilder,
              private http: HttpClient) {
  }

  ngOnInit() {
    this.UtilisateursService.getAllUtilisateur(localStorage.getItem('idEntite')).subscribe((data) => {
      this.users = data;
    }, (err) => {
      console.log(err);
    });

    this.UtilisateursService.getAllRole().subscribe((data) => {
      this.roles = data;
>>>>>>> 7c99457fcc21780c95ee36928f9e73464084d1af
    }, (err) => {
      console.log(err);
    });

}
<<<<<<< HEAD
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
=======


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

}
>>>>>>> 7c99457fcc21780c95ee36928f9e73464084d1af
