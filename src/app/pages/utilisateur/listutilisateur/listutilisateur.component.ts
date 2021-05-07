import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbActiveModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { UtilisateursService } from '../../../services/utilisateurs.service';
import { FormGroup }   from '@angular/forms';
import { UtilisateurModelServer } from "../../../modele/utilisateurs.model";


@Component({
  selector: 'ngx-listutilisateur',
  templateUrl: './listutilisateur.component.html',
  styleUrls: ['./listutilisateur.component.scss']
})

export class ListutilisateurComponent implements OnInit{

  users: any;
  closeResult:string;

  constructor(private UtilisateursService: UtilisateursService,
              private router:Router,
              private modalService: NgbModal) {
  }

  ngOnInit() {
    this.UtilisateursService.getAllUtilisateur().subscribe((data) => {
      this.users = data;
      console.log(this.users)
    }, (err) => {
      console.log(err);
    });

}
open(content) {
  this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
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

changestatut(){
  this.UtilisateursService.changerStatutUtilisateur().subscribe((data) => {
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
}
