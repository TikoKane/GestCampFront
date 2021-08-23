import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NbComponentStatus, NbGlobalPhysicalPosition, NbGlobalPosition, NbToastrConfig, NbToastrService } from '@nebular/theme';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Console } from 'console';
import { ContactsUpdate } from '../../../modele/contacts';
import { ContactCanalsService } from '../../../services/contact-canals.service';
import {  ContactsService } from '../../../services/contacts.service';
import { NiveauDeVisibilitesService } from '../../../services/niveau-de-visibilites.service';


@Component({
  selector: 'ngx-listecontact',
  templateUrl: './listecontact.component.html',
  styleUrls: ['./listecontact.component.scss']
})
export class ListecontactComponent implements OnInit {
  contacts;
  datacontact;
  closeResult:string;
  donneesUser;
  contact;
  tiko :'1995-01-0555';
  searchedKeyword: string;
  p:number=1;
  ndv;
  
  canauxContact;
  con : any;
      
      constructor(private  route:ActivatedRoute,private contactService : ContactsService,
        private modalService: NgbModal,private niveauDeVisibliteService : NiveauDeVisibilitesService,private contactCanalService : ContactCanalsService,private toastrService: NbToastrService) {
        }
  id = this.route.snapshot.params.id;

  config: NbToastrConfig;
    
  index = 1;
  destroyByClick = true;
  duration = 2000;
  hasIcon = true;
  position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
  preventDuplicates = false;
  status: NbComponentStatus = 'success';
  statusSupprim: NbComponentStatus = 'danger';
  
  titleSupprim = 'Supression d\'un contact !';
  contentSupprim = `Contact supprimé avec suucès!`;

  title = 'Modification d\'un nouveau contact !';
  content = `Contact modifié avec suucès!`;
  
  
  cont : ContactsUpdate={
    Nom: '',
    Prenom:'',
    Etat: true,
    Statut: true,
    DateDeNaissance: '',
    Sexe: '',
    Adresse:'',
    Situation: '',
    Profession: '',
    IdNiveauVisibilite: '',
    IdUser : '',
    Matricule:'',
    IdEntite:localStorage.getItem('idEntite')
  }
      
    ngOnInit() {
      this.contactService.getAllContactByListeDiffusion(localStorage.getItem('idEntite'),this.id).subscribe((data) => {
        this.contacts = data;
        console.log(this.contacts)
      }, (err) => {
        console.log(err);
      });
      this.niveauDeVisibliteService.getAllNiveauDeVisibilite().subscribe((data) => {
        this.ndv = data;
        
      }, (err) => {
        console.log(err);
      });
  }
  
  open(id) {
    this.contactService.getContact(id).subscribe((data) => {
      this.datacontact = data;
      this.cont.Nom = data["nom"];
      this.cont.Prenom = data["prenom"];
      this.cont.DateDeNaissance = data["dateDeNaissance"];
      this.cont.Sexe = data["sexe"];
      this.cont.Adresse = data["adresse"];
      this.cont.Situation = data["situation"];
      this.cont.Profession = data["profession"];
      this.cont.IdNiveauVisibilite = data["idNiveauVisibilite"];
      this.cont.IdUser = data["idUser"];
      this.cont.Matricule = data["matricule"];
    }, (err) => {
      console.log(err);
    });
    this.contactCanalService.getCanauxByContact(id).subscribe((data) => {
       this.canauxContact =data;
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
  
  changestatut(IdContact){
    console.log(IdContact)
    this.contactService.changerStatutContactt(IdContact).subscribe((data) => {
      this.contactService.getAllContactByListeDiffusion(localStorage.getItem('idEntite'),this.id).subscribe((data) => {
        this.contacts = data;
        console.log(this.contacts)
      }, (err) => {
        console.log(err);
      });
    }, (err) => {
      console.log(err);
    });
  
  }
  
  supprimeruser(id){
    this.contactService.DeleteContact(id).subscribe((data1) => {
      this.ToastSuppression(this.statusSupprim, this.titleSupprim, this.contentSupprim);
       this.contactService.getAllContact(localStorage.getItem('idEntite')).subscribe((data) => {
        this.contacts = data;
      }, (err) => {
        console.log(err);
      });
    }, (err) => {
      console.log(err);
    });
  }
  
  private ToastSuppression(type: NbComponentStatus, title: string, body: string) {
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
  

editcontact(id, form: NgForm){
  this.contactService.EditContact(id, this.cont).subscribe((data) => {
    this.contactService.getAllContactByListeDiffusion(localStorage.getItem('idEntite'),this.id).subscribe((data) => {
      this.contacts = data;
      console.log(this.contacts)
    }, (err) => {
      console.log(err);
    });
  }, (err) => {
    console.log(err);
  });

}
  }
  
  
  