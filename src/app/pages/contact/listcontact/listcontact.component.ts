import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbActiveModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ContactsService } from '../../../services/contacts.service';
import { countries } from '../../../services/country-data-store';
import { contactCanalInfo, Contacts,  } from '../../../modele/contacts';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'ngx-listcontact',
  templateUrl: './listcontact.component.html',
  styleUrls: ['./listcontact.component.scss']
})
export class ListcontactComponent implements OnInit {
  Contacts: any;
  datacontact: any;
  closedResult:string;
  public countries:any = countries;
  metzo : any;
  idUser;
 

  contact : Contacts ={
    Id: 0,
    Nom: '',
    Prenom:'',
    Adresse: '',
    Etat: 1,
    Statut: 1,
    Pays: '',
    DateDeNaissance: null,
    Sexe: true,
    Situation: '',
    Profession: '',
    IdNiveauVisibilite: 1,
    IdUser : +localStorage.getItem('id'),
  }

  con : contactCanalInfo = {
    whatsapp :'',
    telephone :'',
    facebook : '',
    mail : ''
  }
  

  constructor (private ContactsService: ContactsService,
  private router:Router,
  private modalService: NgbModal) { }

  ngOnInit(): void { 
      this.ContactsService.GetContacts(localStorage.getItem('id')).subscribe((data) => {
      this.Contacts = data;
    console.log(this.Contacts)
  }, (err) => {
    console.log(this.Contacts)
    console.log(err);

});

}
open(id) {
  console.log(id);
  this.ContactsService.getContactById(id).subscribe((data) => {
    this.datacontact = data;
    this.contact.Nom = data["nom"];
    this.contact.Prenom = data["prenom"];
    this.contact.DateDeNaissance = data["dateDeNaissance"];
    this.contact.Sexe = data["sexe"];
    this.contact.Pays = data["pays"];
    this.contact.Adresse = data["adresse"];
    this.contact.Situation = data["situation"];
    this.contact.Profession = data["profession"];
    console.log(data["dateDeNaissance"])
    console.log(this.datacontact)
  }, (err) => {
    console.log(err);
  });
  this.modalService.open( {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closedResult = `Closed with: ${result}`;
    
  }, (reason) => {
    this.closedResult = `Dismissed ${this.getDismissReason(reason)}`;
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
  this.ContactsService.changerStatutContact(id).subscribe((data) => {
     console.log(id)
     this.ContactsService.GetContacts(localStorage.getItem('id')).subscribe((data) => {
      this.Contacts = data;
    }, (err) => {
      console.log(err);
    });
  }, (err) => {
    console.log(err);
  });

}
editcontact(id, form: NgForm){
  console.log(this.contact) 
  console.log(form)
  this.ContactsService.EditContact(id, this.contact).subscribe((data) => {
     console.log(data)
     this.ContactsService.GetContacts(localStorage.getItem('id')).subscribe((data) => {
      this.Contacts = data;
    console.log(this.Contacts)
  }, (err) => {
    console.log(this.Contacts)
    console.log(err);

});
  }, (err) => {
    console.log(err);
  });

}

supprimercontact(id){
  this.ContactsService.DeleteContact(id).subscribe((data1) => {
     this.ContactsService.GetContacts(localStorage.getItem('id')).subscribe((data) => {
      this.Contacts = data;
    }, (err) => {
      console.log(err);
    });
  }, (err) => {
    console.log(err);
  });
}}
