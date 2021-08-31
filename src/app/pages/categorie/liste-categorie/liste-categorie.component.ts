import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Categories } from '../../../modele/categories';
import { CategoriesService } from '../../../services/categories.service';

@Component({
  selector: 'ngx-liste-categorie',
  templateUrl: './liste-categorie.component.html',
  styleUrls: ['./liste-categorie.component.scss']
})
export class ListeCategorieComponent implements OnInit {
  users: any;
  datauser: any;
  closeResult:string;
  tiko :any;
  roles: any;
  idUser = localStorage.getItem("id");
  searchedKeyword: string;
  p:number=1;

  user: Categories = {
  Libelle:'',
  idEntite:localStorage.getItem('idEntite')
  };


  constructor(private CategorieService: CategoriesService,
              private router:Router,
              private modalService: NgbModal) {
  }

  ngOnInit() {
    this.CategorieService.getAllCategorie(localStorage.getItem('idEntite')).subscribe((data) => {
      this.users = data;
    }, (err) => {
      console.log(err);
    });

}


open(id) {
this.CategorieService.getCategorie(id).subscribe((data) => {
  this.datauser = data;
  this.user.Libelle=data['libelle'];
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


supprimeruser(id){
this.CategorieService.DeleteCategorie(id).subscribe((data1) => {
   this.CategorieService.getAllCategorie(localStorage.getItem('idEntite')).subscribe((data) => {
    this.users = data;
  }, (err) => {
    console.log(err);
  });
}, (err) => {
  console.log(err);
});
}

saveModification(id,form :NgForm){
  
  this.CategorieService.EditCategorie(id,this.user).subscribe((data1) => {
    console.log(data1)
    this.CategorieService.getAllCategorie(localStorage.getItem('idEntite')).subscribe((data) => {
     this.users = data;
   }, (err) => {
     console.log(err);
   });
 }, (err) => {
   console.log(err);
 });
}

}