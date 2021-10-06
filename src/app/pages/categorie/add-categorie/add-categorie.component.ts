import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NbComponentStatus, NbGlobalPhysicalPosition, NbGlobalPosition, NbToastrConfig, NbToastrService } from '@nebular/theme';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Categories } from '../../../modele/categories';
import { CategoriesService } from '../../../services/categories.service';

@Component({
  selector: 'ngx-add-categorie',
  templateUrl: './add-categorie.component.html',
  styleUrls: ['./add-categorie.component.scss']
})
export class AddCategorieComponent implements OnInit {

  
  constructor(private CategorieService: CategoriesService,
    private router:Router,private toastrService: NbToastrService,
    private modalService: NgbModal) {
}

config: NbToastrConfig;

index = 1;
destroyByClick = true;
duration = 2000;
hasIcon = true;
position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
preventDuplicates = false;
status: NbComponentStatus = 'success';

title = 'Ajout d\'un nouveau type de campagne !';
content = `Type de campagne ajouté avec suucès!`;

users: any;
datauser: any;
closeResult:string;
tiko :any;
roles: any;
idUser = localStorage.getItem("id");
searchedKeyword: string;
p:number=1;



ngOnInit() {
  this.CategorieService.getAllCategorie(localStorage.getItem('idEntite')).subscribe((data) => {
    this.users = data;
  }, (err) => {
    console.log(err);
  });
}



// Ajout d'un utilisateur
user: Categories = {
Libelle: '',
idEntite:localStorage.getItem('idEntite')
};

Ajout(form :NgForm){
this.CategorieService.AddCategorie(this.user).subscribe((data) => {

//  console.log(data)
form.reset();
this.ToastValide(this.status, this.title, this.content);
this.router.navigateByUrl('pages/categorie/list')
}, (err) => {
console.log(this.user)
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