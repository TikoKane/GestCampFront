<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
=======
import { UserService } from './../../../@core/mock/users.service';
import { Component, OnInit } from '@angular/core';
import { UtilisateursService } from "../../../services/utilisateurs.service";
import { UpdateUser} from '../../../modele/utilisateurs.model';



>>>>>>> 883326b75956340257501077c3438bd45baad99d

@Component({
  selector: 'ngx-infoscompte',
  templateUrl: './infoscompte.component.html',
  styleUrls: ['./infoscompte.component.scss']
})
export class InfoscompteComponent implements OnInit {

<<<<<<< HEAD
  constructor() { }

  ngOnInit(): void {
=======
  constructor(private UtilisateurService: UtilisateursService ) { }
  users: any;
  
  ngOnInit(){
    this.UtilisateurService.getUtilisateurById(localStorage.getItem("id")).subscribe((data) => {
      this.users = data;
    }, (err) => {
      console.log(err);
    });
>>>>>>> 883326b75956340257501077c3438bd45baad99d
  }

}
