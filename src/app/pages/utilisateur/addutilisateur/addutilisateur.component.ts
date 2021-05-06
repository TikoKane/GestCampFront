import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilisateurModelServer } from '../../../modele/utilisateurs.model';
import { UtilisateursService } from '../../../services/utilisateurs.service';

@Component({
  selector: 'ngx-addutilisateur',
  templateUrl: './addutilisateur.component.html',
  styleUrls: ['./addutilisateur.component.scss']
})
export class AddutilisateurComponent implements OnInit {
titre;
confirmPassword;
roles: any;
  constructor(private UtilisateursService: UtilisateursService,
              private router:Router) {
  }

  ngOnInit() {
    this.UtilisateursService.getAllRole().subscribe((data) => {
      this.roles = data;
      console.log(this.roles)
    }, (err) => {
      console.log(err);
    });

}
  user: UtilisateurModelServer = {
    Email: '',
    Etat: null,
    Id: null,
    IdRole: '',
    Login:'',
    NomComplet :'',
    Password : '',
    Statut :null
  };
}
