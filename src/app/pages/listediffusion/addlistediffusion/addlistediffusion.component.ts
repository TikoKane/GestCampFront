import { Component, OnInit } from '@angular/core';
import { Contacts } from '../../../modele/contacts';
import { ListeDeDiffusions } from '../../../modele/liste-de-diffusions';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  ListeDeDiffusionsService } from '../../../services/liste-de-diffusions.service';
import { ContactsService } from '../../../services/contacts.service';
import { ContactListeDiffusionsService } from '../../../services/contact-liste-diffusions.service';
import { ContactListeDiffusions } from '../../../modele/contact-liste-diffusions';

@Component({
  selector: 'ngx-addlistediffusion',
  templateUrl: './addlistediffusion.component.html',
  styleUrls: ['./addlistediffusion.component.scss']
})
export class AddlistediffusionComponent implements OnInit {

  contacts : any;
  contact : any;
 
  selected ;
  firstForm: FormGroup;
  secondForm: FormGroup;
  thirdForm: FormGroup;


  listediffusion : ListeDeDiffusions ={
    Id : 0,
    Titre : "",
    Reference : "",
    Etat : 1,
    Statut : 1,
    NiveauDeVisibilite: '',
    IdEntite :  localStorage.getItem('idEntite'),

  }

  contactListeDiffusion :ContactListeDiffusions={
    Id : 0,
    Code : 'Cd0000',
    DateDesa : null,
    Etat : 1,
    Raison : '',
    IdContact : '',
    IdListeDiffusion : 1,
    idNiveauVisibilite : 1,
    IdEntite : localStorage.getItem('idEntite'),

  }
  listeContact : Contacts = {
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
  

  constructor(private fb: FormBuilder, private listediffusionService :  ListeDeDiffusionsService , private contactService : ContactsService , 
     private contactListeDiffusionService : ContactListeDiffusionsService) { }

  ngOnInit(): void {
    this.contactService.GetContacts(localStorage.getItem('idUser')).subscribe((data)=> {
      this.contacts = data;
      console.log(this.contacts)
    }, (err) => {
      console.log(this.contacts)
      console.log(err);
    });
    this.firstForm = this.fb.group({
      firstCtrl: ['', Validators.required],
    });
  
    this.secondForm = this.fb.group({
      secondCtrl: ['', Validators.required],
    });
  
    this.thirdForm = this.fb.group({
      thirdCtrl: ['', Validators.required],
    });
  }

  
onFirstSubmit() {
  this.firstForm.markAsDirty();
}

onSecondSubmit() {
  this.secondForm.markAsDirty();
}

onThirdSubmit() {
  this.thirdForm.markAsDirty();
}

valider(){
  this.listediffusionService. AddListeDeDiffusion(this.listediffusion).subscribe((data) => {
    console.log(data)
    this.contactListeDiffusion.IdListeDiffusion = data['id'];
   
    console.log(data['id'])
    console.log(this.selected)
    for (let index = 0; index < this.selected.length; index++) {
     this.contactListeDiffusion.IdContact = this.selected[index];
     this.contactListeDiffusionService.AddContactListeDiffusion(this.contactListeDiffusion).subscribe((data) =>{
      console.log(data);
  }, (err) => {
   //console.log(this.listediffusion)
    console.log(err);
  });
}
  },(err) => {
    console.log(err);
  });
}
} 


