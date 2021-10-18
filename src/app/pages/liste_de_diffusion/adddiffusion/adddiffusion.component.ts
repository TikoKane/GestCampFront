import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NbComponentStatus, NbGlobalPhysicalPosition, NbGlobalPosition, NbToastrConfig, NbToastrService } from '@nebular/theme';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ContactListeDiffusions } from '../../../modele/contact-liste-diffusions';
import { ListeDeDiffusions, ListeDeDiffusionsEdit } from "../../../modele/liste-de-diffusions";
import { ContactListeDiffusionsService } from '../../../services/contact-liste-diffusions.service';
import { ContactsService } from '../../../services/contacts.service';
import { ListeDeDiffusionsService } from "../../../services/liste-de-diffusions.service";
import { NiveauDeVisibilitesService } from '../../../services/niveau-de-visibilites.service';


@Component({
  selector: 'ngx-adddiffusion',
  templateUrl: './adddiffusion.component.html',
  styleUrls: ['./adddiffusion.component.scss']
})
export class AdddiffusionComponent implements OnInit {
contacts;
players;
nv;
selected='';
nom;
trouve=false;
id;

listes: any;
dataliste: any;
closeResult:string;
searchedKeyword: string;
p:number=1;

config: NbToastrConfig;

index = 1;
destroyByClick = true;
duration = 2000;
hasIcon = true;
position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
preventDuplicates = false;


status: NbComponentStatus = 'success';
title = 'Ajout d\'une nouvelle liste !';
content = `Liste de diffusion ajoutée avec succès!`;

statusDanger: NbComponentStatus = 'danger';
titleDanger = 'Ajout d\'une nouvelle liste !';
contentDanger = `Erreur lors de l\'ajout d'une nouvelle liste!`;

statusE: NbComponentStatus = 'success';
titleE = 'Modification d\'une liste de diffusion!';
contentE = `Liste de diffusion modifiée avec succès!`;

statusED: NbComponentStatus = 'danger';
titleED = 'Modification d\'une liste !';
contentED = `Erreur lors de la modification de la liste!`;

 

  constructor(private modalService: NgbModal,private router : Router,private toastrService: NbToastrService,private niveauDeVisibilite : NiveauDeVisibilitesService,private contactListeDiffService : ContactListeDiffusionsService,private listeDeDiffusionService: ListeDeDiffusionsService, private contactService : ContactsService) { 

  }

  ngOnInit(): void {
    this.listeDeDiffusionService.getAllListeDeDiffusion(localStorage.getItem('idEntite')).subscribe((data) => {
      this.listes = data;
    }, (err) => {
      console.log(err);
    });

    this.contactService.getAllContact(localStorage.getItem('idEntite')).subscribe((data) => {
      this.contacts=data;
    }, (err) => {
     
      console.log(err);
    });

    this.niveauDeVisibilite.getAllNiveauDeVisibilite().subscribe((data) => {
      this.nv=data;
    }, (err) => {
     
      console.log(err);
    });
  }
  
listeE : ListeDeDiffusionsEdit = {
  IdNiveauVisibilite: '',
  Titre: '',
  IdEntite : localStorage.getItem('idEntite'),
  Reference :'',
}


  liste: ListeDeDiffusions = {
    IdNiveauVisibilite: '',
    Id: 0,
    IdEntite : localStorage.getItem('idEntite'),
    Titre: '',
    Reference: 'RE',
    Etat: 1,
    Statut: 1
  };

  contactlistdiff: ContactListeDiffusions = {
    Id: 0,
    Code: 'CO',
    DateDesa: '',
    IdEntite : localStorage.getItem('idEntite'),
    IdContact:'',
    IdListeDiffusion:0,
    idNiveauVisibilite:1,
    Raison:'',
    Etat:1
  };
  
  
  Ajout(form :NgForm){
    //
    this.listeDeDiffusionService.AddListeDeDiffusion(this.liste).subscribe((data) => {
      this.contactlistdiff.IdListeDiffusion = data['id']
      this.ToastValide(this.status,this.title,this.content)
      this.router.navigate(['pages/liste_de_diffusion/list']);
       for (let index = 0; index < this.selected.length; index++) {
         this.contactlistdiff.IdContact = this.selected[index]
        this.contactListeDiffService.AddContactListeDiffusion(this.contactlistdiff).subscribe((data) => {
        }, (err) => {
          console.log(err);
        });
       }
      form.reset();
    }, (err) => {
      console.log(err);
      this.ToastValide(this.statusDanger,this.titleDanger,this.contentDanger)
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
    console.log(id);
    this.listeDeDiffusionService.getListeDeDiffusion(id).subscribe((data) => {
      this.dataliste = data;
      this.listeE.Reference = this.dataliste.reference;
      this.listeE.IdNiveauVisibilite = this.dataliste.idNiveauVisibilite;
      this.listeE.Titre = this.dataliste.titre;
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

  changeEtat(id){
    this.listeDeDiffusionService.changeEtatListeDeDiffusion(id).subscribe((data) => {
       console.log(data)
       this.listeDeDiffusionService.getAllListeDeDiffusion(localStorage.getItem('idEntite')).subscribe((data) => {
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
    this.listeDeDiffusionService.DeleteListeDeDiffusion(id).subscribe((data1) => {
       this.listeDeDiffusionService.getAllListeDeDiffusion(localStorage.getItem('idEntite')).subscribe((data) => {
        this.listes = data;
      }, (err) => {
        console.log(err);
      });
    }, (err) => {
      console.log(err);
    });
  }

  listContact(id){

    this.router.navigate(['/pages/liste_de_diffusion/listcontact', id]);
  }

  saveModification(id,form :NgForm){
    console.log(this.listeE)

    this.listeDeDiffusionService.EditListeDeDiffusion(id,this.listeE).subscribe((data1) => {
      this.ToastValide(this.statusE, this.statusE, this.statusE);
      this.listeDeDiffusionService.getAllListeDeDiffusion(localStorage.getItem('idEntite')).subscribe((data) => {
       this.listes = data;
     }, (err) => {
      this.ToastValide(this.statusED, this.titleED, this.contentED);
     });
   }, (err) => {
     console.log(err);
   });
  }
}
