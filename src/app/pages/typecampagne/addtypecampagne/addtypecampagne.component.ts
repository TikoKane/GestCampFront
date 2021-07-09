import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NbComponentStatus, NbGlobalPhysicalPosition, NbGlobalPosition, NbToastrConfig, NbToastrService } from '@nebular/theme';
import { TypeDeCampagnes } from '../../../modele/type-De-Campagnes';
import { TypeDeCampagnesService } from '../../../services/type-de-campagnes.service';

@Component({
  selector: 'ngx-addtypecampagne',
  templateUrl: './addtypecampagne.component.html',
  styleUrls: ['./addtypecampagne.component.scss']
})
export class AddtypecampagneComponent implements OnInit {
  
    constructor(private Typecampagneservice: TypeDeCampagnesService,
                private router:Router,private toastrService: NbToastrService) {
    }
  
    config: NbToastrConfig;
  
    index = 1;
    destroyByClick = true;
    duration = 2000;
    hasIcon = true;
    position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
    preventDuplicates = false;
    status: NbComponentStatus = 'success';
  
    title = 'Ajout d\'un nouveau type de campagne !';
    content = `Type de campagne ajouté avec suucès!`;
  
  
  
  
    ngOnInit() {
  
  }
  
  
  
  // Ajout d'un utilisateur
    user: TypeDeCampagnes = {
      Libelle: '',
      idEntite:localStorage.getItem('idEntite')
    };
  
    Ajout(form :NgForm){
      this.Typecampagneservice.AddTypeDeCampagne(this.user).subscribe((data) => {
      
      //  console.log(data)
        form.reset();
        this.ToastValide(this.status, this.title, this.content);
        this.router.navigateByUrl('pages/typecampagne/list')
      }, (err) => {
        console.log(this.user)
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
  }
  