import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { contactCanalInfo, Contacts, Countries } from '../../../modele/contacts';
import { ContactsService } from '../../../services/contacts.service';
import { countries } from '../../../services/country-data-store';

@Component({
  selector: 'ngx-addcontact',
  templateUrl: './addcontact.component.html',
  styleUrls: ['./addcontact.component.scss']
})
export class AddcontactComponent implements OnInit {
text;
tel = false;
face = false;
wha = false;
mail = false;


firstForm: FormGroup;
secondForm: FormGroup;
thirdForm: FormGroup;
public countries:any = countries;

con : contactCanalInfo = {
  whatsapp :'',
  telephone :'',
  facebook : '',
  mail : ''
}

contact : Contacts ={
  Id: 0,
  Nom: '',
  Prenom:'',
  Adresse: '',
  Etat: 1,
  Statut: 1,
  Pays: '',
  DateDeNaissance: '',
  Sexe: true,
  Situation: '',
  Profession: '',
  IdNiveauVisibilite: 1,
  
}

constructor(private fb: FormBuilder, private contactService : ContactsService) {
}

ngOnInit() {
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

addTelephone(){
  this.tel=true;
}

addFacebook(){
  this.face=true;
}

addWhatsapp(){
  this.wha=true;
}

addMail(){
  this.mail=true;
}

addTelephoneAndWhatsapp(){
  this.con.whatsapp=this.con.telephone;
  this.tel=true;  
  this.wha=true;

}

supTelephone(){
  this.con.telephone='';
  this.tel = false;
  }
  

supFacebook(){
  this.con.facebook='';
  this.face = false;
  }

  supWhatsapp(){
    this.con.whatsapp='';
    this.wha = false;
    }

    supMail(){
      this.con.mail='';
      this.mail = false;
      }

    valider(){
this.contactService.AddContact(this.contact).subscribe((data) => {
    
  console.log(data)
 
}, (err) => {
 // console.log(this.user)
  console.log(err);
});

}


}
