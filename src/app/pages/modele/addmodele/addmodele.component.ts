import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Modeles } from '../../../modele/modeles';
import { ModelesService } from '../../../services/modeles.service';
import './ckeditor.loader';
import 'ckeditor';
import { CanalEnvoisService } from '../../../services/canal-envois.service';
import { Router } from '@angular/router';
import { NbComponentStatus, NbGlobalPhysicalPosition, NbGlobalPosition, NbToastrConfig, NbToastrService } from '@nebular/theme';

@Component({
  selector: 'ngx-addmodele',
  templateUrl: './addmodele.component.html',
  styleUrls: ['./addmodele.component.scss']
})
export class AddmodeleComponent implements OnInit {
canal;
config: NbToastrConfig;

index = 1;
destroyByClick = true;
duration = 2000;
hasIcon = true;
position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
preventDuplicates = false;
status: NbComponentStatus = 'success';

title = 'Ajout d\'un nouveau modèle !';
content = `Modèle ajouté avec succès!`;


statusDanger: NbComponentStatus = 'danger';

titleDanger = 'Ajout d\'un nouveau modèle !';
contentDanger = `Erreur lors de l\'ajout d'un modèle!`;

  constructor(private toastrService: NbToastrService,private router: Router,private modeleService : ModelesService, private canalEnvoiService : CanalEnvoisService) { }

  ngOnInit(): void {
    this.canalEnvoiService.getAllCanalEnvoi().subscribe((data) => {
    this.canal=data;
    }, (err) => {
      console.log(err);
    });
  }

  onChangeModel(deviceValue) {
   console.log(deviceValue)
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
  Ajout(form :NgForm){/*
    this.modeleService.AddModele(this.model).subscribe((data) => {
      this.ToastValide(this.status,this.title,this.content)
      this.router.navigate(['pages/modele/list']);
    }, (err) => {
      this.ToastValideDanger(this.statusDanger,this.titleDanger,this.contentDanger)
      console.log(err);
    });*/
    console.log(this.model.Contenu);
  }



  private ToastValide(type: NbComponentStatus, title: string, body: string) {
    const config = {
      status: type,
      destroyByClick: this.destroyByClick,
      duration: this.duration,
      hasIcon: this.hasIcon,
      position: this.position,
      preventDuplicates: this.preventDuplicates,
    };
    const titleContent = title ? `${title}` : '';
  
    this.index += 1;
    this.toastrService.show(
      body,
      `${titleContent}`,
      config);
  }


  private ToastValideDanger(type: NbComponentStatus, title: string, body: string) {
    const config = {
      status: type,
      destroyByClick: this.destroyByClick,
      duration: this.duration,
      hasIcon: this.hasIcon,
      position: this.position,
      preventDuplicates: this.preventDuplicates,
    };
    const titleContent = title ? `${title}` : '';
  
    this.index += 1;
    this.toastrService.show(
      body,
      `${titleContent}`,
      config);
  }

}
