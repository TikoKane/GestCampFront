import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TypeDeCampagnes } from '../../../modele/type-De-Campagnes';
import { TypeDeCampagnesService } from '../../../services/type-de-campagnes.service';

@Component({
  selector: 'ngx-listetypecampagne',
  templateUrl: './listetypecampagne.component.html',
  styleUrls: ['./listetypecampagne.component.scss']
})
export class ListetypecampagneComponent implements OnInit {
  users: any;
  datauser: any;
  closeResult:string;
  tiko :any;
  roles: any;
  idUser = localStorage.getItem("id");
  searchedKeyword: string;
  p:number=1;

  user: TypeDeCampagnes = {
  Libelle:'',
  idEntite:localStorage.getItem('idEntite')
  };


  constructor(private TypecampagneService: TypeDeCampagnesService,
              private router:Router,
              private modalService: NgbModal) {
  }

  ngOnInit() {
    this.TypecampagneService.getAllTypeDeCampagne(localStorage.getItem('idEntite')).subscribe((data) => {
      this.users = data;
    }, (err) => {
      console.log(err);
    });

}


open(id) {
this.TypecampagneService.getTypeDeCampagne(id).subscribe((data) => {
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
this.TypecampagneService.DeleteTypeDeCampagne(id).subscribe((data1) => {
   this.TypecampagneService.getAllTypeDeCampagne(localStorage.getItem('idEntite')).subscribe((data) => {
    this.users = data;
  }, (err) => {
    console.log(err);
  });
}, (err) => {
  console.log(err);
});
}

saveModification(id,form :NgForm){
  
  this.TypecampagneService.EditTypeDeCampagne(id,this.user).subscribe((data1) => {
    console.log(data1)
    this.TypecampagneService.getAllTypeDeCampagne(localStorage.getItem('idEntite')).subscribe((data) => {
     this.users = data;
   }, (err) => {
     console.log(err);
   });
 }, (err) => {
   console.log(err);
 });
}

}