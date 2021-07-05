import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NbComponentStatus, NbGlobalPhysicalPosition, NbGlobalPosition, NbToastrConfig, NbToastrService } from '@nebular/theme';
import { ContactListeDiffusions } from '../../../modele/contact-liste-diffusions';
import { ListeDeDiffusions } from "../../../modele/liste-de-diffusions";
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
 

  constructor(private router : Router,private toastrService: NbToastrService,private niveauDeVisibilite : NiveauDeVisibilitesService,private contactListeDiffService : ContactListeDiffusionsService,private listeDeDiffusionService: ListeDeDiffusionsService, private contactService : ContactsService) { 

  }

  ngOnInit(): void {
    this.contactService.GetContacts(localStorage.getItem('id')).subscribe((data) => {
      this.contacts=data;
     console.log(this.contacts)
    }, (err) => {
     
      console.log(err);
    });

    this.niveauDeVisibilite.getAllNiveauDeVisibilite().subscribe((data) => {
      this.nv=data;
     console.log(this.nv)
    }, (err) => {
     
      console.log(err);
    });
  }
  

  liste: ListeDeDiffusions = {
    NiveauDeVisibilite: '',
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
          this.ToastValideDanger(this.statusDanger,this.titleDanger,this.contentDanger)
          console.log(err);
        });
       }
      form.reset();
    }, (err) => {
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
}
