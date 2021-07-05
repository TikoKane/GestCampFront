import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
<<<<<<< HEAD
=======
import { NbComponentStatus, NbGlobalPhysicalPosition, NbGlobalPosition, NbToastrConfig, NbToastrService } from '@nebular/theme';
>>>>>>> 7c99457fcc21780c95ee36928f9e73464084d1af
import {  CanalEnvois } from '../../../modele/canal-envois';
import { CanalEnvoisService } from '../../../services/canal-envois.service';

@Component({
  selector: 'ngx-addcanalenvoi',
  templateUrl: './addcanalenvoi.component.html',
  styleUrls: ['./addcanalenvoi.component.scss']
})
export class AddcanalenvoiComponent implements OnInit {
<<<<<<< HEAD
  constructor(private canalEnvoiService : CanalEnvoisService) { }

  ngOnInit(): void {
  }

  canal: CanalEnvois = {
    Titre: '',
    Description :'',
    Code : "",
    Etat :1,
    Id : 0,
    IdEntite : +localStorage.getItem('idEntite'),
=======
  constructor(private canalEnvoiService : CanalEnvoisService, 
   private toastrService: NbToastrService) {
  }
  ngOnInit(): void {
  }

  config: NbToastrConfig;

index = 1;
destroyByClick = true;
duration = 2000;
hasIcon = true;
position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
preventDuplicates = false;
status: NbComponentStatus = 'success';

title = 'Ajout d\'un nouveau canal !';
content = `Canal ajouté avec suucès!`;


statusNoValide: NbComponentStatus = 'danger';

titleNoValide = 'Ajout d\'un nouveau canal !';
contentNoValide = `Echec lors de l'ajout d'un nouveau canal!`;

  canal: CanalEnvois = {
    Titre: '',
    Description :'',
    Code : '',
    Etat :1,
    Id : 0
>>>>>>> 7c99457fcc21780c95ee36928f9e73464084d1af

  };
  Ajout(form :NgForm){
    console.log(this.canal)
    this.canalEnvoiService.AddCanalEnvoi(this.canal).subscribe((data) => {
<<<<<<< HEAD
    
      console.log(data)
      form.reset();
    }, (err) => {
      console.log(this.canal)
      console.log(err);
    });
  }
=======
      this.ToastValide(this.status, this.title, this.content);
      form.reset();
    }, (err) => {
      this.ToastValideNoValide(this.statusNoValide, this.titleNoValide, this.contentNoValide);
      console.log(err);
    });
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


  private ToastValideNoValide(type: NbComponentStatus, title: string, body: string) {
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
>>>>>>> 7c99457fcc21780c95ee36928f9e73464084d1af
}
