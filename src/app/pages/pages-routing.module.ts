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
    /*
    {
      path: 'ui-features',
      loadChildren: () => import('./ui-features/ui-features.module')
        .then(m => m.UiFeaturesModule),
    },
    {
      path: 'modal-overlays',
      loadChildren: () => import('./modal-overlays/modal-overlays.module')
        .then(m => m.ModalOverlaysModule),
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
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous.module')
        .then(m => m.MiscellaneousModule),
    },*/
    { path: '', redirectTo: 'utilisateur', pathMatch: 'full' },
    { path: '**', redirectTo: 'utilisateur' },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
