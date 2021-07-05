import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
<<<<<<< HEAD
import { contactCanalInfo, Contacts, Countries } from '../../../modele/contacts';
import { ContactsService } from '../../../services/contacts.service';
import { countries } from '../../../services/country-data-store';
=======
import { Router } from '@angular/router';
import { NbComponentStatus, NbGlobalPhysicalPosition, NbGlobalPosition, NbToastrConfig, NbToastrService } from '@nebular/theme';
import { ContactCanals } from '../../../modele/contact-canals';
import { contactCanalInfo, Contacts, Countries } from '../../../modele/contacts';
import { ContactCanalsService } from '../../../services/contact-canals.service';
import { ContactsService } from '../../../services/contacts.service';
import { countries } from '../../../services/country-data-store';
import { NiveauDeVisibilitesService } from '../../../services/niveau-de-visibilites.service';
>>>>>>> 7c99457fcc21780c95ee36928f9e73464084d1af

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
<<<<<<< HEAD
=======
ndv;
>>>>>>> 7c99457fcc21780c95ee36928f9e73464084d1af


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

<<<<<<< HEAD
=======
contactCanal : ContactCanals ={
  Id:0,
  CanalDuContatct: '',
  Etat :true,
  DateDeDesabonnement:'',
  IdCanalEnvoi : 0,
  IdContact : 0,
  Raison : '',
  Lieuounumero:'',
  IdEntite : localStorage.getItem("idEntite")
}

>>>>>>> 7c99457fcc21780c95ee36928f9e73464084d1af
contact : Contacts ={
  Id: 0,
  Nom: '',
  Prenom:'',
  Adresse: '',
<<<<<<< HEAD
  Etat: 1,
  Statut: 1,
  Pays: '',
  DateDeNaissance: null,
  Sexe: true,
  Situation: '',
  Profession: '',
  IdNiveauVisibilite: 1,
  IdUser:  +localStorage.getItem('id'),
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
=======
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


constructor(private fb: FormBuilder,private niveauDeVisibliteService : NiveauDeVisibilitesService,private router: Router, private contactService : ContactsService, 
  private contactCanalService : ContactCanalsService,private toastrService: NbToastrService) {
}

config: NbToastrConfig;

index = 1;
destroyByClick = true;
duration = 2000;
hasIcon = true;
position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
preventDuplicates = false;
status: NbComponentStatus = 'success';

title = 'Ajout d\'un nouveau contact !';
content = `Contact ajouté avec suucès!`;

maxdate = new Date;
mindate = new Date;

ngOnInit() {
  this.niveauDeVisibliteService.getAllNiveauDeVisibilite().subscribe((data) => {
    this.ndv = data;
    
  }, (err) => {
    console.log(err);
  });
 
>>>>>>> 7c99457fcc21780c95ee36928f9e73464084d1af
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
<<<<<<< HEAD
  

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
 
=======
 
  valider(){
    this.contactService.AddContact(this.contact).subscribe((data) => {
    
  this.ToastValide(this.status, this.title, this.content);

  if(this.tel==true){
    this.contactCanal.IdContact = data['id'],
    this.contactCanal.DateDeDesabonnement = null,
    this.contactCanal.Raison = null,
    this.contactCanal.IdCanalEnvoi = 1,
    this.contactCanal.CanalDuContatct ="Téléphone"
    this.contactCanal.Lieuounumero=this.con.telephone,
    this.contactCanalService.AddContactCanal(this.contactCanal).subscribe((data) => {
      console.log(data)

    }, (err) => {
      // console.log(this.user)
       console.log(err);
     });
  }

  if(this.wha==true){
    this.contactCanal.IdContact = data['id'],
    this.contactCanal.DateDeDesabonnement = null,
    this.contactCanal.Raison = null,
    this.contactCanal.IdCanalEnvoi = 4,
    this.contactCanal.CanalDuContatct ="Whatsapp",
    this.contactCanal.Lieuounumero=this.con.whatsapp,
    this.contactCanalService.AddContactCanal(this.contactCanal).subscribe((data) => {
      console.log(data)

    }, (err) => {
      // console.log(this.user)
       console.log(err);
     });
  }


  if(this.face==true){
    this.contactCanal.IdContact = data['id'],
    this.contactCanal.DateDeDesabonnement = null,
    this.contactCanal.Raison = null,
    this.contactCanal.IdCanalEnvoi = 3,
    this.contactCanal.CanalDuContatct ="Facebook",
    this.contactCanal.Lieuounumero=this.con.facebook,
    this.contactCanalService.AddContactCanal(this.contactCanal).subscribe((data) => {
      console.log(data)

    }, (err) => {
      // console.log(this.user)
       console.log(err);
     });
  }
 
  if(this.mail==true){
    this.contactCanal.IdContact = data['id'],
    this.contactCanal.DateDeDesabonnement = null,
    this.contactCanal.Raison = null,
    this.contactCanal.IdCanalEnvoi = 2,
    this.contactCanal.CanalDuContatct ="Mail",
    this.contactCanal.Lieuounumero=this.con.mail,
    this.contactCanalService.AddContactCanal(this.contactCanal).subscribe((data) => {
      console.log(data)
    }, (err) => {
      // console.log(this.user)
       console.log(err);
     });
  }
  this.router.navigateByUrl('pages/contact/list')

>>>>>>> 7c99457fcc21780c95ee36928f9e73464084d1af
}, (err) => {
 // console.log(this.user)
  console.log(err);
});

}

<<<<<<< HEAD

=======
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
>>>>>>> 7c99457fcc21780c95ee36928f9e73464084d1af
}
