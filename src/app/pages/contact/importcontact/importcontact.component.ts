import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NbComponentStatus, NbGlobalPhysicalPosition, NbGlobalPosition, NbToastrConfig, NbToastrService } from '@nebular/theme';
import * as XLSX from 'xlsx';
import { ContactCanals } from '../../../modele/contact-canals';
import { contactCanalInfo, Contacts } from '../../../modele/contacts';
import { ContactCanalsService } from '../../../services/contact-canals.service';
import { ContactsService } from '../../../services/contacts.service';

type AOA = any[][];
@Component({
  selector: 'ngx-importcontact',
  templateUrl: './importcontact.component.html',
  styleUrls: ['./importcontact.component.scss']
})
export class ImportcontactComponent implements OnInit {

  constructor(private fb: FormBuilder,private router: Router, private contactService : ContactsService, 
    private contactCanalService : ContactCanalsService,private toastrService: NbToastrService){}
   
    id;
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
    
    statusNoValide: NbComponentStatus = 'danger';

titleNoValide = 'Ajout d\'un nouveau contact !';
contentNoValide = `Echec lors de l'ajout d'un nouveau contact!`;

    maxdate = new Date;
    mindate = new Date;

    afficheTab = false;
    
  ngOnInit(): void {
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
    IdNiveauVisibilite: '1',
    IdUser :localStorage.getItem('id'),
    IdEntite :localStorage.getItem('idEntite')
  }
  
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

  
    dataC: AOA = [[, ], [, ]];
    wopts: XLSX.WritingOptions = { bookType: 'xlsx', type: 'array' };
    fileName: string = 'SheetJS.xlsx';
  
    onFileChange(evt: any) {
      /* wire up file reader */
      this.afficheTab = true;
      const target: DataTransfer = <DataTransfer>(evt.target);
      if (target.files.length !== 1) throw new Error('Cannot use multiple files');
      const reader: FileReader = new FileReader();
      reader.onload = (e: any) => {
        /* read workbook */
        const bstr: string = e.target.result;
        const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });
  
        /* grab first sheet */
        const wsname: string = wb.SheetNames[0];
        const ws: XLSX.WorkSheet = wb.Sheets[wsname];
  
        /* save data */
        this.dataC = <AOA>(XLSX.utils.sheet_to_json(ws, { header: 1 }));
      
      };
      reader.readAsBinaryString(target.files[0]);
    }
  

    
    addContacts(){
     for(var i=1; i<this.dataC.length;i++){
   this.contact.Nom = this.dataC[i][0];
    this.contact.Prenom = this.dataC[i][1];
    this.contact.Sexe=this.dataC[i][4];
    this.contact.Pays=this.dataC[i][5];
    this.contact.Adresse=this.dataC[i][6];
    this.contact.Situation=this.dataC[i][7];
    this.contact.Profession=this.dataC[i][8];
    this.con.telephone=this.dataC[i][2];

    this.contactService.AddContact(this.contact).subscribe((data) => {
   
      this.ToastValide(this.status, this.title, this.content);
      this.id = data['id'],
     
      this.router.navigateByUrl('pages/contact/list')
    
    }, (err) => {
      this.ToastValideNoValide(this.statusNoValide, this.titleNoValide, this.contentNoValide);
      console.log(err);
    });

    if(this.dataC[i][2]!== undefined){
      this.contactCanal.IdContact = this.id,
      this.contactCanal.DateDeDesabonnement = null,
      this.contactCanal.Raison = null,
      this.contactCanal.IdCanalEnvoi = 1,
      this.contactCanal.CanalDuContatct ="Téléphone"
      this.contactCanal.Lieuounumero=this.dataC[i][2]
      this.contactCanalService.AddContactCanal(this.contactCanal).subscribe((data) => {
        console.log(data)
  
      }, (err) => {
        // console.log(this.user)
         console.log(err);
       });
    }
  else{
    console.log("tiiko")
  }
    if(this.dataC[i][10]!== undefined){
      this.contactCanal.IdContact = this.id,
      this.contactCanal.DateDeDesabonnement = null,
      this.contactCanal.Raison = null,
      this.contactCanal.IdCanalEnvoi = 4,
      this.contactCanal.CanalDuContatct ="Whatsapp",
      this.contactCanal.Lieuounumero=this.dataC[i][10]
      this.contactCanalService.AddContactCanal(this.contactCanal).subscribe((data) => {
  
      }, (err) => {
        // console.log(this.user)
         console.log(err);
       });
    }
  
  
    if(this.dataC[i][9]!== undefined){
      this.contactCanal.IdContact = this.id,
      this.contactCanal.DateDeDesabonnement = null,
      this.contactCanal.Raison = null,
      this.contactCanal.IdCanalEnvoi = 3,
      this.contactCanal.CanalDuContatct ="Facebook",
      this.contactCanal.Lieuounumero=this.dataC[i][9]
      this.contactCanalService.AddContactCanal(this.contactCanal).subscribe((data) => {
  
      }, (err) => {
        // console.log(this.user)
         console.log(err);
       });
    }
   
    if(this.dataC[i][11]!== undefined){
      this.contactCanal.IdContact = this.id,
      this.contactCanal.DateDeDesabonnement = null,
      this.contactCanal.Raison = null,
      this.contactCanal.IdCanalEnvoi = 2,
      this.contactCanal.CanalDuContatct ="Mail",
      this.contactCanal.Lieuounumero=this.dataC[i][11]
      this.contactCanalService.AddContactCanal(this.contactCanal).subscribe((data) => {
      }, (err) => {
        // console.log(this.user)
         console.log(err);
       });
    }
  }
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
    
    
  private ToastValideNoValide(type: NbComponentStatus, title: string, body: string) {
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
