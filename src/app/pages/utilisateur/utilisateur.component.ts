import { Component, OnInit } from '@angular/core';
import { UtilisateursService } from "../../services/utilisateurs.service";
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngx-components',
  template: `
    <router-outlet></router-outlet>
  `,
})
export class UtilisateurComponent implements OnInit {

  constructor(private utilisateurService: UtilisateursService,
    private router: Router,
    private modalService: NgbModal){

  }


  ngOnInit() {
  
  }

}
