import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../../@core/data/smart-table';
import { CanalEnvoisService } from '../../../services/canal-envois.service';

@Component({
  selector: 'ngx-listcanalenvoi',
  templateUrl: './listcanalenvoi.component.html',
  styleUrls: ['./listcanalenvoi.component.scss']
})
export class ListcanalenvoiComponent  {

  canals: any;
  datacanal: any;
  closeResult:string;
  tiko :any;
  searchedKeyword: string;
p:number=1;

  constructor(private CanalEnvoisService: CanalEnvoisService,
              private router:Router,
              private modalService: NgbModal) {
  }

  ngOnInit() {
    this.CanalEnvoisService.getAllCanalEnvoi().subscribe((data) => {
      this.canals = data;
      console.log(this.canals)
    }, (err) => {
      console.log(this.canals)
      console.log(err);
    });

}
open(id) {
  console.log(id);
  this.CanalEnvoisService.getCanalEnvoi(id).subscribe((data) => {
    this.datacanal = data;
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
  this.CanalEnvoisService.changeEtatCanalEnvoi(id).subscribe((data) => {
     console.log(data)
     this.CanalEnvoisService.getAllCanalEnvoi().subscribe((data) => {
      this.canals = data;
   //  console.log(this.users)
    }, (err) => {
      console.log(err);
    });
  }, (err) => {
    console.log(err);
  });

}

supprimeruser(id){
  this.CanalEnvoisService.DeleteCanalEnvoi(id).subscribe((data1) => {
     this.CanalEnvoisService.getAllCanalEnvoi().subscribe((data) => {
      this.canals = data;
    }, (err) => {
      console.log(err);
    });
  }, (err) => {
    console.log(err);
  });
}
}
