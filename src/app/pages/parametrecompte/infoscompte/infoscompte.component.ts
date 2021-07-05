import { UserService } from './../../../@core/mock/users.service';
import { Component, OnInit } from '@angular/core';
import { UtilisateursService } from "../../../services/utilisateurs.service";
import { UpdateUser} from '../../../modele/utilisateurs.model';




@Component({
  selector: 'ngx-infoscompte',
  templateUrl: './infoscompte.component.html',
  styleUrls: ['./infoscompte.component.scss']
})
export class InfoscompteComponent implements OnInit {

  constructor(private UtilisateurService: UtilisateursService ) { }
  users: any;
  
  ngOnInit(){
    this.UtilisateurService.getUtilisateurById(localStorage.getItem("id")).subscribe((data) => {
      this.users = data;
    }, (err) => {
      console.log(err);
    });
  }

}
