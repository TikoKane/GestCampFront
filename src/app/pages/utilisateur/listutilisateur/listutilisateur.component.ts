import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControlOptions, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

import { NgbModal, NgbActiveModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { UserModel } from '../../../modele/utilisateurs.model';
import { UtilisateursService } from '../../../services/utilisateurs.service';
import { Location } from '@angular/common';
import { environment } from '../../../../environments/environment';


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

  editForm: FormGroup;
  userModel: UserModel;


  constructor(private UtilisateursService: UtilisateursService,
              private route:Router,
              private modalService: NgbModal,
              private fb : FormBuilder,
              private http: HttpClient,
              private location: Location) {
  }

  ngOnInit() {
    this.UtilisateursService.getAllUtilisateur().subscribe((data) => {
      this.users = data;
      console.log(this.users)
    }, (err) => {
      console.log(err);
    });

    this.editForm = this.fb.group({
      Nom: [''],
      Prenom: [''],
      email: [''],
      IdRole: [''],
      Telephone: ['']
    });

}

openEdit(userModel: UserModel){
  this.editForm.patchValue( { 
    id : userModel.id,
    Nom: userModel.Nom,
    Prenom: userModel.Prenom,
    Email: userModel.Email,
    IdRole: userModel.IdRole,
    Telephone: userModel.Telephone
  });
}

open(id, userModel: UserModel) {
  console.log(id);
  this.UtilisateursService.getUtilisateurById(id).subscribe((data) => {
    this.datauser = data;
  }, (err) => {
    console.log(err);
  });
  this.modalService.open( {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
    
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });

  this.editForm.patchValue( { 
    Nom: userModel.Nom,
    Prenom: userModel.Prenom,
    Email: userModel.Email,
    IdRole: userModel.IdRole,
    Telephone: userModel.Telephone
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
     this.UtilisateursService.getAllUtilisateur().subscribe((data) => {
      this.users = data;
    }, (err) => {
      console.log(err);
    });
  }, (err) => {
    console.log(err);
  });
  }
  
  onSave(id){

   
    //this.UtilisateursService.UpdateUtilisateur(this.userModel).subscribe(()=> this.goBack());

    
    const url = 'https://localhost:44332/api/utilisateurs/put/' + id 


    this.http.put(url, this.editForm.value)
    .subscribe((results) =>{
      this.ngOnInit();
      this.modalService.dismissAll();
    })
    

  }
  
  goBack(): void{
    this.location.back();
  }
}

