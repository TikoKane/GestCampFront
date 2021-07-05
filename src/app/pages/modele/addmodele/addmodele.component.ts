import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Modeles } from '../../../modele/modeles';
import { ModelesService } from '../../../services/modeles.service';
import './ckeditor.loader';
import 'ckeditor';
import { CanalEnvoisService } from '../../../services/canal-envois.service';

@Component({
  selector: 'ngx-addmodele',
  templateUrl: './addmodele.component.html',
  styleUrls: ['./addmodele.component.scss']
})
export class AddmodeleComponent implements OnInit {
canal;
  constructor(private modeleService : ModelesService, private canalEnvoiService : CanalEnvoisService) { }

  ngOnInit(): void {
    this.canalEnvoiService.getAllCanalEnvoi().subscribe((data) => {
    this.canal=data;
    }, (err) => {
      console.log(err);
    });
  }

  model: Modeles = {
    Libelle: '',
    Contenu :'',
    Description : '',
    Code :177854,
    Id : 0,
    Statut:true,
    IdCanalEnvoi:'',
    IdEntite:localStorage.getItem('idEntite')
  };
  Ajout(form :NgForm){
    this.modeleService.AddModele(this.model).subscribe((data) => {
    
      console.log(data)
      form.reset();
    }, (err) => {
      console.log(this.model)
      console.log(err);
    });
  }
}
