import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
<<<<<<< HEAD
=======
    
>>>>>>> 7c99457fcc21780c95ee36928f9e73464084d1af

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
<<<<<<< HEAD
      path: 'listediffusion',
      loadChildren: () => import('./listediffusion/listediffusion.module')
        .then(m => m.ListeDiffusionModule),
    },
    {
=======
>>>>>>> 7c99457fcc21780c95ee36928f9e73464084d1af
      path: 'campagne',
      loadChildren: () => import('./campagne/campagne.module')
        .then(m => m.CampagneModule),
    },
    {
<<<<<<< HEAD
      path: 'compte',
      loadChildren: () => import('./parametrecompte/parametrecompte.module')
        .then(m => m.ParametrcompteModule),
    },/*
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
      path: 'extra-components',
      loadChildren: () => import('./extra-components/extra-components.module')
        .then(m => m.ExtraComponentsModule),
    },
    {
      path: 'maps',
      loadChildren: () => import('./maps/maps.module')
        .then(m => m.MapsModule),
    },
    {
      path: 'charts',
      loadChildren: () => import('./charts/charts.module')
        .then(m => m.ChartsModule),
    },
    {
      path: 'editors',
      loadChildren: () => import('./editors/editors.module')
        .then(m => m.EditorsModule),
    },
    {
      path: 'tables',
      loadChildren: () => import('./tables/tables.module')
        .then(m => m.TablesModule),
    },
    {
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous.module')
        .then(m => m.MiscellaneousModule),
    },*/
=======
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
      path: 'regledenvoi',
      loadChildren: () => import('./regledenvoi/regleenvoi.module')
        .then(m => m.RegledenvoiModule),
    },
>>>>>>> 7c99457fcc21780c95ee36928f9e73464084d1af
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
