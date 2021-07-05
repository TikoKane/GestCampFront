import { Reference } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Contacts } from '../../../modele/contacts';
import { ListeDeDiffusions } from '../../../modele/liste-de-diffusions';
import { ListeDeDiffusionsService } from '../../../services/liste-de-diffusions.service';
import { AddlistediffusionComponent } from '../addlistediffusion/addlistediffusion.component';

@Component({
  selector: 'ngx-listelistediffusion',
  templateUrl: './listelistediffusion.component.html',
  styleUrls: ['./listelistediffusion.component.scss']
})
export class ListelistediffusionComponent implements OnInit {
  ListeDeDiffusions: any;
  dataListediff: any;
  cloResult:string;  
  selected ;
  listediffusion : ListeDeDiffusions ={
    Id : 0,
    Titre : "",
    Reference : "",
    Etat : 1,
    Statut : 1,
    NiveauDeVisibilite : '',
    IdEntite : localStorage.getItem('idEntite'),
  }

  ListeContact : Contacts = {
    Id: 0,
    Nom: '',
    Prenom:'',
    Adresse: '',
    Etat: true,
    Statut: true,
    Pays: 'Senegal',
    DateDeNaissance: null,
    Sexe: '',
    Situation: '',
    Profession: '',
    IdNiveauVisibilite: '',
    IdUser :localStorage.getItem('id')
  }

  constructor(private listediffusionService :  ListeDeDiffusionsService ,
                          private router:Router,
                             private modalService: NgbModal) { }

  ngOnInit(): void {
    this.listediffusionService.getAllListeDeDiffusion(localStorage.getItem('idEntite')).subscribe((data) => {
      this.ListeDeDiffusions = data;
    console.log(this.ListeDeDiffusions)
  }, (err) => {
    console.log(this.ListeDeDiffusions)
    console.log(err);
  });
}

  open(id) {
    console.log(id);
    this.listediffusionService.getListeDeDiffusion(id).subscribe((data) => {
    this.dataListediff = data;
    console.log(this.dataListediff)
    }, (err) => {
      console.log(err);
    });
    this.modalService.open( {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.cloResult = `Closed with: ${result}`;
      
    }, (reason) => {
      this.cloResult = `Dismissed ${this.getDismissReason(reason)}`;
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

  changes(id){
    this.listediffusionService.changeEtatListeDeDiffusion(id).subscribe((data) => {
       console.log(id)
       this.listediffusionService.getAllListeDeDiffusion(localStorage.getItem('idEntite')).subscribe((data) => {
        this.ListeDeDiffusions = data;
      }, (err) => {
        console.log(err);
      });
    }, (err) => {
      console.log(err);
    });
  
  }

  editlisediffusion(id , form: NgForm){
    console.log(this.listediffusion) 
    this.listediffusionService.EditListeDeDiffusion(id ,  this.listediffusion ).subscribe((data) => {
      this.listediffusion.Reference = data['reference'];
       console.log(data)
       this.listediffusionService.getAllListeDeDiffusion(localStorage.getItem('idEntite')).subscribe((data) => {
        this.ListeDeDiffusions = data;
      console.log(this.ListeDeDiffusions)
    }, (err) => {
      console.log(this.ListeDeDiffusions)
      console.log(err);
  
  });
    }, (err) => {
      console.log(err);
    });
  
  }
  
supprimerlistediffusion(id){
  this.listediffusionService.DeleteListeDeDiffusion(id).subscribe((data1) => {
     this.listediffusionService.getAllListeDeDiffusion(localStorage.getItem('idEntite')).subscribe((data) => {
      this.ListeDeDiffusions = data;
    }, (err) => {
      console.log(err);
    });
  }, (err) => {
    console.log(err);
  });
}
}
