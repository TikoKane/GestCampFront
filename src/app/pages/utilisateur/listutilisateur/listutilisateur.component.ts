import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilisateursService } from '../../../services/utilisateurs.service';

@Component({
  selector: 'ngx-listutilisateur',
  templateUrl: './listutilisateur.component.html',
  styleUrls: ['./listutilisateur.component.scss']
})
export class ListutilisateurComponent implements OnInit{

  users: any;

  constructor(private UtilisateursService: UtilisateursService,
              private router:Router) {
  }

  ngOnInit() {
    this.UtilisateursService.getAllUtilisateur().subscribe((data) => {
      this.users = data;
      console.log(this.users)
    }, (err) => {
      console.log(err);
    });

}
}
