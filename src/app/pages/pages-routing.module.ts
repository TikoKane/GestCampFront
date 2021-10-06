import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    

    {
      path: 'canalenvoi',
      loadChildren: () => import('./canalenvoi/canalenvoi.module')
        .then(m => m.CanalenvoiModule),
    },
    {
      path: 'utilisateur',
      loadChildren: () => import('./utilisateur/utlisateur.module')
        .then(m => m.UtilisateurModule),
    },
    {
      path: 'contact',
      loadChildren: () => import('./contact/contact.module')
        .then(m => m.ContactModule),
    },
    {
      path: 'campagne',
      loadChildren: () => import('./campagne/campagne.module')
        .then(m => m.CampagneModule),
    },
    {
      path: 'liste_de_diffusion',
      loadChildren: () => import('./liste_de_diffusion/liste-de-diffusion.module')
        .then(m => m.ListeDeDiffusionModule),
    },
    {
      path: 'compte',
      loadChildren: () => import('./parametrecompte/parametrecompte.module')
        .then(m => m.ParametrcompteModule),
    },
    {
      path: 'modele',
      loadChildren: () => import('./modele/modele.module')
        .then(m => m.ModeleModule),
    },
    {
      path: 'typecampagne',
      loadChildren: () => import('./typecampagne/typecampagne.module')
        .then(m => m.TypeCampagneModule),
    },
    {
      path: 'categorie',
      loadChildren: () => import('./categorie/categorie.module')
        .then(m => m.CategorieModule),
    },
    {
      path: 'accueil',
      loadChildren: () => import('./accueil/charts.module')
        .then(m => m.ChartsModule),
    },

    { path: '', redirectTo: 'accueil/d3', pathMatch: 'full' },
    { path: '**', redirectTo: 'accueil/d3' },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
