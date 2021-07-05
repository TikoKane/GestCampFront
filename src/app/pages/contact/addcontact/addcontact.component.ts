import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbComponentStatus, NbGlobalPhysicalPosition, NbGlobalPosition, NbToastrConfig, NbToastrService } from '@nebular/theme';
import { ContactCanals } from '../../../modele/contact-canals';
import { contactCanalInfo, Contacts, Countries } from '../../../modele/contacts';
import { ContactCanalsService } from '../../../services/contact-canals.service';
import { ContactsService } from '../../../services/contacts.service';
import { countries } from '../../../services/country-data-store';
import { NiveauDeVisibilitesService } from '../../../services/niveau-de-visibilites.service';

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
ndv;


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

contact : Contacts ={
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

}, (err) => {
 // console.log(this.user)
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
}
