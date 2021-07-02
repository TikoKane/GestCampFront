import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { contactCanalInfo, Contacts, Countries} from '../../../modele/contacts';
import { ContactService } from '../../../services/contacts.service';
import { ContactCanals } from '../../../modele/contact-canals';
import { countries } from '../../../services/country-data-store';
import { Router } from '@angular/router';
import { ContactCanalsService } from "../../../services/contact-canals.service";
import { NbComponentStatus, NbGlobalPhysicalPosition, NbGlobalPosition, NbToastrConfig, NbToastrService } from '@nebular/theme';



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
  
  contactCanal : ContactCanals ={
    Id:0,
    CanalDuContatct: '',
    Etat :true,
    DateDeDesabonnement:'',
    IdCanalEnvoi : 0,
    IdContact : 0,
    Raison : ''
  }
  
  contact : Contacts ={
    Id: 0,
    Nom: '',
    Prenom:'',
    Adresse: '',
    Etat: true,
    Statut: true,
    Pays: '',
    DateDeNaissance: '',
    Sexe: 'M',
    Situation: '',
    Profession: '',
    IdNiveauVisibilite: 2,
    IdUser :'2'
    
  }
  
  constructor(private fb: FormBuilder,private router: Router, private contactService : ContactService, 
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
  
    
    valider(){
      console.log(this.contact.IdUser);
    this.contactService.AddContact(this.contact).subscribe((data) => {      
    this.ToastValide(this.status, this.title, this.content);
  
    if(this.tel==true){
      this.contactCanal.IdContact = data['id'],
      this.contactCanal.DateDeDesabonnement = null,
      this.contactCanal.Raison = null,
      this.contactCanal.IdCanalEnvoi = 1,
      this.contactCanal.CanalDuContatct ="Téléphone"
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
      this.contactCanal.CanalDuContatct ="Whatsapp"
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
      this.contactCanal.CanalDuContatct ="Facebook"
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
      this.contactCanal.CanalDuContatct ="Mail"
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
