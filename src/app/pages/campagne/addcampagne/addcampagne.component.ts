import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { Campagnes } from '../../../modele/campagnes';
import { RegleDEnvois } from '../../../modele/regle-D-Envois';
import { CanalEnvoisService } from '../../../services/canal-envois.service';
import { CategoriesService } from '../../../services/categories.service';
import { ListeDeDiffusionsService } from '../../../services/liste-de-diffusions.service';
import { ModelesService } from '../../../services/modeles.service';
import { NiveauDeVisibilitesService } from '../../../services/niveau-de-visibilites.service';
import { RegleDEnvoisService } from '../../../services/regle-denvois.service';
import { TypeDeCampagnesService } from '../../../services/type-de-campagnes.service';
>>>>>>> 7c99457fcc21780c95ee36928f9e73464084d1af

@Component({
  selector: 'ngx-addcampagne',
  templateUrl: './addcampagne.component.html',
  styleUrls: ['./addcampagne.component.scss']
})
export class AddcampagneComponent implements OnInit {

<<<<<<< HEAD
  constructor() { }

  ngOnInit(): void {
  }

}
=======
  niveaudevisbilite: any;
  typecampagnes;
  niveaudevisibilites;
  canalenvois;
  regledenvois;
  listeDiffusion;
  idListeDiffusion='';
  idModel='';
  modeles;
  libelleModele;
  libelleLDD;
  libelleNDV;
  libelleTDC;
  nomComplet = localStorage.getItem("nom")+" "+localStorage.getItem("prenom");

  constructor(private niveauVisibiliteService : NiveauDeVisibilitesService, private typeCampagneService : TypeDeCampagnesService,private canalEnvoiService : CanalEnvoisService,
    private regleDenvoiService : RegleDEnvoisService,private listeDiffusionService : ListeDeDiffusionsService,private modelService : ModelesService) { }
  camp : Campagnes = {
    Code :'Codeeeee',
    DateDeDebut:'',
    DateDeFin:'',
    Description:'',
    Etat : true,
    Statut : true,
    Id:0,
    IdCanalEnvoi:'',
    IdCategorie:'',
    IdNiveauVisibilite:'',
    IdRegleEnvoi:'',
    IdTypeDeCampagne:'',
    IdUtilisateur:localStorage.getItem('id'),
    Titre:''
  }

  regleEnvoi : RegleDEnvois = {
       DateExecution:'',
       Expediteur:'',
       Frequence:null,
       Id : 0,
       FuseauHoraire :'',
       NombreTentative :null,
       Recepteur:''



  }
  ngOnInit(): void {
    this.niveauVisibiliteService.getAllNiveauDeVisibilite().subscribe((data) => {
      this.niveaudevisbilite = data;
      console.log(this.niveaudevisbilite)
    }, (err) => {
      console.log(err);
    });

    
  this.canalEnvoiService.getAllCanalEnvoi().subscribe((data) => {
    this.canalenvois = data;
    console.log(this.canalenvois)
  }, (err) => {
    console.log(err);
  });


  this.typeCampagneService.getAllTypeDeCampagne(localStorage.getItem('idEntite')).subscribe((data) => {
    this.typecampagnes = data;
  }, (err) => {
    console.log(err);
  });


  this.listeDiffusionService.getAllListeDeDiffusion(localStorage.getItem('idEntite')).subscribe((data) => {
    this.listeDiffusion = data;
  }, (err) => {
    console.log(err);
  });

  this.modelService.getAllModele(localStorage.getItem('idEntite')).subscribe((data) => {
    this.modeles = data;
    console.log(this.modeles)
  }, (err) => {
    console.log(err);
  });


  
}

valider(){


}

onChangeModel(deviceValue) {
  this.modelService.getModele(deviceValue).subscribe((data) => {
    this.libelleModele = data['libelle'];
  }, (err) => {
    console.log(err);
  });
}

onChangeNDV(deviceValue) {
  this.niveauVisibiliteService.getNiveauDeVisibilite(deviceValue).subscribe((data) => {
    this.libelleNDV = data['libelle'];
  }, (err) => {
    console.log(err);
  });
}

onChangeLDD(deviceValue) {
  this.listeDiffusionService.getListeDeDiffusion(deviceValue).subscribe((data) => {
    this.libelleLDD = data['titre'];
  }, (err) => {
    console.log(err);
  });
}

onChangeTDC(deviceValue) {
  this.typeCampagneService.getTypeDeCampagne(deviceValue).subscribe((data) => {
    this.libelleTDC = data['libelle'];
  }, (err) => {
    console.log(err);
  });
}


}

>>>>>>> 7c99457fcc21780c95ee36928f9e73464084d1af
