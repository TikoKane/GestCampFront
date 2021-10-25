import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Modeles } from '../../../modele/modeles';
import { ModelesService } from '../../../services/modeles.service';
import './ckeditor.loader';
import 'ckeditor';
import { CanalEnvoisService } from '../../../services/canal-envois.service';
import { Router } from '@angular/router';
import { NbComponentStatus, NbGlobalPhysicalPosition, NbGlobalPosition, NbToastrConfig, NbToastrService } from '@nebular/theme';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngx-addmodele',
  templateUrl: './addmodele.component.html',
  styleUrls: ['./addmodele.component.scss']
})
export class AddmodeleComponent implements OnInit {
canal;
variable;
config: NbToastrConfig;
closeResult:string;
index = 1;
destroyByClick = true;
duration = 2000;
hasIcon = true;
position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
preventDuplicates = false;
status: NbComponentStatus = 'success';

title = 'Ajout d\'un nouveau modèle !';
content = `Modèle ajouté avec succès!`;


statusDanger: NbComponentStatus = 'danger';

titleDanger = 'Ajout d\'un nouveau modèle !';
contentDanger = `Erreur lors de l\'ajout d'un modèle!`;

listes;
dataliste;
searchedKeyword: string;
p:number=1;

  constructor(private toastrService: NbToastrService,private router: Router
    , private modalService: NgbModal, private canalEnvoiService : CanalEnvoisService, 
    private modeleService : ModelesService) { }

  ngOnInit(): void {
    this.modeleService.getAllModele(localStorage.getItem('idEntite')).subscribe((data) => {
      this.listes = data;
    }, (err) => {
      console.log(err);
    });

    this.canalEnvoiService.getAllCanalEnvoi().subscribe((data) => {
    this.canal=data;
    }, (err) => {
      console.log(err);
    });
  }

  onChangeModel(deviceValue) {
   console.log(deviceValue)
  }

  openVar() {
    
    this.modalService.open( {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  open(id) {
    console.log(id);
    this.modeleService.getModele(id).subscribe((data) => {
      this.dataliste = data;
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

 
  model: Modeles = {
    Libelle: '',
    Contenu :'',
    Description : '',
    Code :177854,
    Id : 0,
    Statut:true,
    IdCanalEnvoi:'',
    IdEntite:localStorage.getItem('idEntite')
  };
  Ajout(form :NgForm){
    this.modeleService.AddModele(this.model).subscribe((data) => {
      this.ToastValide(this.status,this.title,this.content)
      form.reset()
      this.router.navigate(['pages/modele/add']);

    }, (err) => {
      this.ToastValideDanger(this.statusDanger,this.titleDanger,this.contentDanger)
      console.log(err);
    });
    console.log(this.model.Contenu);

 

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


  private ToastValideDanger(type: NbComponentStatus, title: string, body: string) {
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

  open2(id) {
    console.log(id);
    this.modeleService.getModele(id).subscribe((data) => {
      this.dataliste = data;
    }, (err) => {
      console.log(err);
    });
    this.modalService.open( {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }



  changeEtat(id){
    this.modeleService.changeEtatModele(id).subscribe((data) => {
       console.log(data)
       this.modeleService.getAllModele(localStorage.getItem('idEntite')).subscribe((data) => {
        this.listes = data;
     //  console.log(this.users)
      }, (err) => {
        console.log(err);
      });
    }, (err) => {
      console.log(err);
    });
  
  }

  supprimeruser(id){
    this.modeleService.DeleteModele(id).subscribe((data1) => {
       this.modeleService.getAllModele(localStorage.getItem('idEntite')).subscribe((data) => {
        this.listes = data;
      }, (err) => {
        console.log(err);
      });
    }, (err) => {
      console.log(err);
    });
  }

  variableFonction() { // without type info
    this.model.Contenu += ' '+this.variable;  
  }
}
