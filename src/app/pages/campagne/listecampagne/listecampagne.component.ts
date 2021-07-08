import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbComponentStatus, NbGlobalPhysicalPosition, NbGlobalPosition, NbToastrConfig, NbToastrService } from '@nebular/theme';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CampagnesService } from '../../../services/campagnes.service';

@Component({
  selector: 'ngx-listecampagne',
  templateUrl: './listecampagne.component.html',
  styleUrls: ['./listecampagne.component.scss']
})
export class ListecampagneComponent implements OnInit {

  listes: any;
  dataliste: any;
  closeResult:string;
  thierno :any;

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

  constructor(
    private CampagneService: CampagnesService,
    private toastrService: NbToastrService,
    private router: Router,
    private modalService: NgbModal) {
    
   }

  ngOnInit() {
    this.CampagneService.getAllCampagne(localStorage.getItem('idEntite')).subscribe((data) => {
      this.listes = data;
      console.log(this.listes)
    }, (err) => {
      console.log(this.listes)
      console.log(err);
    });
  }

  open(id) {
    console.log(id);
    this.CampagneService.getCampagne(id).subscribe((data) => {
      this.dataliste = data;
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

 changeEtat(id){
    this.CampagneService.changeEtatCampagne(id).subscribe((data) => {
       console.log(data)
       this.CampagneService.getAllCampagne(localStorage.getItem('idEntite')).subscribe((data) => {
        this.listes = data;
     //  console.log(this.users)
      }, (err) => {
        console.log(err);
      });
    }, (err) => {
      console.log(err);
    });
  
  }

  supprimeruser(id){
    this.CampagneService.DeleteCampagne(id).subscribe((data1) => {
       this.CampagneService.getAllCampagne(localStorage.getItem('idEntite')).subscribe((data) => {
        this.listes = data;
      }, (err) => {
        console.log(err);
      });
    }, (err) => {
      console.log(err);
    });
  }

  listCampagne(id){

    this.router.navigate(['/pages/campagne/detail', id]);
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
