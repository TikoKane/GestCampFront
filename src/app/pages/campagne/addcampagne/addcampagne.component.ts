import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbComponentStatus, NbGlobalPhysicalPosition, NbGlobalPosition, NbToastrConfig, NbToastrService } from '@nebular/theme';
import { Campagnes } from '../../../modele/campagnes';
import { RegleDEnvois } from '../../../modele/regle-D-Envois';
import { CampagnesService } from '../../../services/campagnes.service';
import { CanalEnvoisService } from '../../../services/canal-envois.service';
import { ListeDeDiffusionsService } from '../../../services/liste-de-diffusions.service';
import { ModelesService } from '../../../services/modeles.service';
import { NiveauDeVisibilitesService } from '../../../services/niveau-de-visibilites.service';
import { RegleDEnvoisService } from '../../../services/regle-denvois.service';
import { TypeDeCampagnesService } from '../../../services/type-de-campagnes.service';
import './ckeditor.loader';
import 'ckeditor';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ContactsService } from '../../../services/contacts.service';

@Component({
  selector: 'ngx-addcampagne',
  templateUrl: './addcampagne.component.html',
  styleUrls: ['./addcampagne.component.scss'],
  
})
export class AddcampagneComponent implements OnInit {

  tabs: any[] = [
    {
      title: 'Route tab #1',
      route: '/pages/campagne/unitaire',
    },
    {
      title: 'Route tab #2',
      route: '/pages/campagne/unitaire',
    },
  ];

  dateExecutionCampagne = new Date;
  dateExecutionFin = new Date;
  niveaudevisbilite: any;
  typecampagnes;
  niveaudevisibilites;
  canalenvois;
  regledenvois;
  contacts;
  listeDiffusion;
  idListeDiffusion='';
  idCanalEnvoi='';
  idModel='';
  modeles;
  libelleModele;
  libelleLDD;
  libelleNDV;
  libelleTDC;
  libelleCDE;
  campUni='';
  nomComplet = localStorage.getItem("nom")+" "+localStorage.getItem("prenom");

  closeResult:string;
config: NbToastrConfig;
index = 1;
destroyByClick = true;
duration = 2000;
hasIcon = true;
position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
preventDuplicates = false;
status: NbComponentStatus = 'success';

title = 'Ajout d\'une nouvelle campagne !';
content = `Campagne ajoutée avec succès!`;


statusNoValide: NbComponentStatus = 'danger';

titleNoValide = 'Ajout d\'un nouveau canal !';
contentNoValide = `Echec lors de l'ajout d'un nouveau canal!`;

  constructor(private modalService: NgbModal,private toastrService: NbToastrService,private campagneService : CampagnesService,private niveauVisibiliteService : NiveauDeVisibilitesService, private typeCampagneService : TypeDeCampagnesService,private canalEnvoiService : CanalEnvoisService,
    private regleDenvoiService : RegleDEnvoisService, private contactService : ContactsService, private router: Router,private listeDiffusionService : ListeDeDiffusionsService,private modelService : ModelesService) { }
  camp : Campagnes = {
    Code :'Codeeeee',
    DateDeDebut:'',
    DateDeFin:'',
    Description:'',
    Etat : true,
    Statut : true,
    Id:0,
    IdCanalEnvoi:'',
    IdEntite:localStorage.getItem('idEntite'),
    IdNiveauVisibilite:'',
    IdRegleEnvoi:'',
    IdTypeCampagne:'',
    IdUtilisateur:localStorage.getItem('id'),
    Titre:'',
  Contenu : ''

  }

  regleEnvoi: RegleDEnvois = {
    DateExecution: new Date(),
    Expediteur: '',
    Frequence: null,
    Id: 0,
    FuseauHoraire: '',
    NombreTentative: null,
    Recepteur: '',
    IdEntite: localStorage.getItem('idEntite'),
  }
  ngOnInit(): void {
    this.niveauVisibiliteService.getAllNiveauDeVisibilite().subscribe((data) => {
      this.niveaudevisbilite = data;
      console.log(this.niveaudevisbilite)
    }, (err) => {
      console.log(err);
    });

    

    this.contactService.getAllContact(localStorage.getItem('idEntite')).subscribe((data) => {
      this.contacts = data;
      console.log(this.contacts)
    }, (err) => {
      console.log(err);
    });

    this.canalEnvoiService.getAllCanalEnvoi().subscribe((data) => {
      this.canalenvois = data;
      console.log(this.canalenvois)
    }, (err) => {
      console.log(err);
    });


    this.typeCampagneService.getAllTypeDeCampagne(localStorage.getItem('idEntite')).subscribe((data) => {
      this.typecampagnes = data;
    }, (err) => {
      console.log(err);
    });

  this.listeDiffusionService.getAllListeDeDiffusion(localStorage.getItem('idEntite')).subscribe((data) => {
    this.listeDiffusion = data;
  }, (err) => {
    console.log(err);
  });
}



  onChangeModel(deviceValue) {
    this.modelService.getModele(deviceValue).subscribe((data) => {
      this.libelleModele = data['libelle'];
    }, (err) => {
      console.log(err);
    });
  }

  onChangeNDV(deviceValue) {
    this.niveauVisibiliteService.getNiveauDeVisibilite(deviceValue).subscribe((data) => {
      this.libelleNDV = data['libelle'];
    }, (err) => {
      console.log(err);
    });
  }

  onChangeLDD(deviceValue) {
    this.listeDiffusionService.getListeDeDiffusion(deviceValue).subscribe((data) => {
      this.libelleLDD = data['titre'];
    }, (err) => {
      console.log(err);
    });
  }

  onChangeTDC(deviceValue) {
    this.typeCampagneService.getTypeDeCampagne(deviceValue).subscribe((data) => {
      this.libelleTDC = data['libelle'];
    }, (err) => {
      console.log(err);
    });
  }

onChangeCDE(deviceValue) {
  this.canalEnvoiService.getCanalEnvoi(deviceValue).subscribe((data) => {
    this.libelleCDE = data['titre'];
    this.modelService.getModeleByCanal(localStorage.getItem('idEntite'),data['id']).subscribe((data) => {
      this.modeles = data;
    }, (err) => {
      console.log(err);
    });
  }, (err) => {
    console.log(err);
  });
}

onChangeDF(deviceValue) {

}


valider(){
  this.regleDenvoiService.AddRegleDEnvoi(this.regleEnvoi).subscribe((data) => {
    this.camp.IdRegleEnvoi=data['id'];
    this.campagneService.AddCampagne(this.camp).subscribe((data) => {

      //Send SMS
      if(this.idCanalEnvoi=='1'){
      this.campagneService.SendSms(this.camp,localStorage.getItem('idEntite'),this.idModel).subscribe((data) => {
        this.ToastValide(this.status,this.title,this.content);
        this.router.navigate(['/pages/campagne/list']);
      }, (err) => {
        console.log(err);
      });
    }

         //Send Email
         if(this.idCanalEnvoi=='2'){
          this.campagneService.SendEmail(this.camp,localStorage.getItem('idEntite'),this.idModel).subscribe((data) => {
            this.ToastValide(this.status,this.title,this.content);
            this.router.navigate(['/pages/campagne/list']);
          }, (err) => {
            this.ToastValideNoValide(this.statusNoValide,this.titleNoValide,this.contentNoValide);
            console.log(err);
          });
        }

    }, (err) => {
      console.log(err);
    });
    
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

  open() {
    
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

  
}

