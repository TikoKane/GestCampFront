import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AddUser, UtilisateurModelServer } from '../../../modele/utilisateurs.model';
import { UtilisateursService } from '../../../services/utilisateurs.service';

@Component({
  selector: 'ngx-addutilisateur',
  templateUrl: './addutilisateur.component.html',
  styleUrls: ['./addutilisateur.component.scss']
})
export class AddutilisateurComponent implements OnInit {
titre;
roles: any;

user: AddUser = {
  email: '',
  telephone :'',
  idRole: '',
  login:'',
  nom :'',
  prenom:'',
  idEntite : +localStorage.getItem('idEntite'),
};

  constructor(private UtilisateursService: UtilisateursService,
              private router:Router) {
  }

  ngOnInit() {

    // Récupérer tous les roles
    this.UtilisateursService.getAllRole().subscribe((data) => {
      this.roles = data;
    }, (err) => {
      console.log(err);
    });

}

 

  Ajout(form :NgForm){
    this.UtilisateursService.AddUtilisateur(this.user).subscribe((data) => {
      console.log(data)
      form.reset();
    }, (err) => {
      console.log(this.user)
      console.log(err);
    });
  }
}
