import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { NgForm } from '@angular/forms';
=======
>>>>>>> 7c99457fcc21780c95ee36928f9e73464084d1af
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../../@core/data/smart-table';
import { CanalEnvoisService } from '../../../services/canal-envois.service';
<<<<<<< HEAD
import { CanalEnvois} from '../../../modele/canal-envois';
=======

>>>>>>> 7c99457fcc21780c95ee36928f9e73464084d1af
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

<<<<<<< HEAD
  canal : CanalEnvois ={
    Id : 0,
    Titre: '',
    Description : '',
    Code : "",
    Etat: 1,
    IdEntite : +localStorage.getItem('idEntite'),
  }
  
=======
>>>>>>> 7c99457fcc21780c95ee36928f9e73464084d1af
  constructor(private CanalEnvoisService: CanalEnvoisService,
              private router:Router,
              private modalService: NgbModal) {
  }

  ngOnInit() {
<<<<<<< HEAD
    this.CanalEnvoisService.GetAllCanalEnvois(localStorage.getItem('idEntite')).subscribe((data) => {
=======
    this.CanalEnvoisService.getAllCanalEnvoi().subscribe((data) => {
>>>>>>> 7c99457fcc21780c95ee36928f9e73464084d1af
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
<<<<<<< HEAD
    this.datacanal.Titre = data["titre"];
    this.datacanal.Description = data["description"];
    this.datacanal.Code = data["code"];
    this.datacanal.Etat = data["etat"];
    console.log(this.datacanal)
=======
>>>>>>> 7c99457fcc21780c95ee36928f9e73464084d1af
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
<<<<<<< HEAD
     this.CanalEnvoisService.GetAllCanalEnvois(localStorage.getItem('idEntite')).subscribe((data) => {
=======
     this.CanalEnvoisService.getAllCanalEnvoi().subscribe((data) => {
>>>>>>> 7c99457fcc21780c95ee36928f9e73464084d1af
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
<<<<<<< HEAD
     this.CanalEnvoisService.GetAllCanalEnvois(localStorage.getItem('idEntite')).subscribe((data) => {
=======
     this.CanalEnvoisService.getAllCanalEnvoi().subscribe((data) => {
>>>>>>> 7c99457fcc21780c95ee36928f9e73464084d1af
      this.canals = data;
    }, (err) => {
      console.log(err);
    });
  }, (err) => {
    console.log(err);
  });
}
<<<<<<< HEAD

editCanalEnvoi(id ,form : NgForm){
  console.log(this.canal) 
  this.CanalEnvoisService.EditCanalEnvoi(id, this.canal).subscribe((data) => {
    this.datacanal.Code = data["code"];
     console.log(data)
     this.CanalEnvoisService.GetAllCanalEnvois(localStorage.getItem('idEntite')).subscribe((data) => {
      this.canals = data;
    console.log(this.canals)
  }, (err) => {
    console.log(this.canals)
    console.log(err);

});
  }, (err) => {
    console.log(err);
  });

}

=======
>>>>>>> 7c99457fcc21780c95ee36928f9e73464084d1af
}
