import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModelesService } from '../../../services/modeles.service';

@Component({
  selector: 'ngx-listemodele',
  templateUrl: './listemodele.component.html',
  styleUrls: ['./listemodele.component.scss']
})
export class ListemodeleComponent implements OnInit {
listes;
dataliste;
closeResult:string;
searchedKeyword: string;
p:number=1;
  constructor(private ModeleService : ModelesService,  private modalService: NgbModal) { }
  ngOnInit() {
    this.ModeleService.getAllModele(localStorage.getItem('idEntite')).subscribe((data) => {
      this.listes = data;
    }, (err) => {
      console.log(err);
    });
  }

  open(id) {
    console.log(id);
    this.ModeleService.getModele(id).subscribe((data) => {
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
    this.ModeleService.changeEtatModele(id).subscribe((data) => {
       console.log(data)
       this.ModeleService.getAllModele(localStorage.getItem('idEntite')).subscribe((data) => {
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
    this.ModeleService.DeleteModele(id).subscribe((data1) => {
       this.ModeleService.getAllModele(localStorage.getItem('idEntite')).subscribe((data) => {
        this.listes = data;
      }, (err) => {
        console.log(err);
      });
    }, (err) => {
      console.log(err);
    });
  }

}
