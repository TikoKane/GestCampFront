import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ListeDeDiffusions } from "../../../modele/liste-de-diffusions";
import { ListeDeDiffusionsService } from "../../../services/liste-de-diffusions.service";

@Component({
  selector: 'ngx-adddiffusion',
  templateUrl: './adddiffusion.component.html',
  styleUrls: ['./adddiffusion.component.scss']
})
export class AdddiffusionComponent implements OnInit {

  constructor(private listeDeDiffusionService: ListeDeDiffusionsService) { 

  }

  ngOnInit(): void {
  }

  liste: ListeDeDiffusions = {
    Id: 0,
    Titre: '',
    Reference: 'RE',
    Etat: 1,
    Statut: 1
  };
  
  Ajout(form :NgForm){
    console.log(this.liste)
    this.listeDeDiffusionService.AddListeDeDiffusion(this.liste).subscribe((data) => {
    
      console.log(data)
      form.reset();
    }, (err) => {
      console.log(this.liste)
      console.log(err);
    });
  }
}
