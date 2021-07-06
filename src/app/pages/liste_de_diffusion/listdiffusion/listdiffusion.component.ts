import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup }   from '@angular/forms';

import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../../@core/data/smart-table';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ListeDeDiffusionsService } from "../../../services/liste-de-diffusions.service";
import { ListeDeDiffusions } from "../../../modele/liste-de-diffusions";
@Component({
  selector: 'ngx-listdiffusion',
  templateUrl: './listdiffusion.component.html',
  styleUrls: ['./listdiffusion.component.scss']
})
export class ListdiffusionComponent implements OnInit {
  listes: any;
  dataliste: any;
  closeResult:string;



  constructor(
    private ListeDeDiffusionService: ListeDeDiffusionsService,
    private router: Router,
    private modalService: NgbModal) {
    
   }

  ngOnInit() {
    this.ListeDeDiffusionService.getAllListeDeDiffusion(localStorage.getItem('idEntite')).subscribe((data) => {
      this.listes = data;
      console.log(this.listes)
    }, (err) => {
      console.log(this.listes)
      console.log(err);
    });
  }

  open(id) {
    console.log(id);
    this.ListeDeDiffusionService.getListeDeDiffusion(id).subscribe((data) => {
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
    this.ListeDeDiffusionService.changeEtatListeDeDiffusion(id).subscribe((data) => {
       console.log(data)
       this.ListeDeDiffusionService.getAllListeDeDiffusion(localStorage.getItem('idEntite')).subscribe((data) => {
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
    this.ListeDeDiffusionService.DeleteListeDeDiffusion(id).subscribe((data1) => {
       this.ListeDeDiffusionService.getAllListeDeDiffusion(localStorage.getItem('idEntite')).subscribe((data) => {
        this.listes = data;
      }, (err) => {
        console.log(err);
      });
    }, (err) => {
      console.log(err);
    });
  }

  listContact(id){

    this.router.navigate(['/pages/liste_de_diffusion/listcontact', id]);
  }
}
