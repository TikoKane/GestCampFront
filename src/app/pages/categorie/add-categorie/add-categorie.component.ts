import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NbComponentStatus, NbGlobalPhysicalPosition, NbGlobalPosition, NbToastrConfig, NbToastrService } from '@nebular/theme';
import { Categories } from '../../../modele/categories';
import { CategoriesService } from '../../../services/categories.service';

@Component({
  selector: 'ngx-add-categorie',
  templateUrl: './add-categorie.component.html',
  styleUrls: ['./add-categorie.component.scss']
})
export class AddCategorieComponent implements OnInit {

  
  constructor(private CategorieService: CategoriesService,
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
user: Categories = {
Libelle: '',
idEntite:localStorage.getItem('idEntite')
};

Ajout(form :NgForm){
this.CategorieService.AddCategorie(this.user).subscribe((data) => {

//  console.log(data)
form.reset();
this.ToastValide(this.status, this.title, this.content);
this.router.navigateByUrl('pages/categorie/list')
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
