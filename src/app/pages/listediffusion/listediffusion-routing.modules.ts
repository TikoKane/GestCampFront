import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddlistediffusionComponent } from './addlistediffusion/addlistediffusion.component';

import {ListeDiffusionComponent } from './listediffusion.component';
import { ListelistediffusionComponent } from './listelistediffusion/listelistediffusion.component';


const routes: Routes = [{
    path: '',
    component: ListeDiffusionComponent,
    children: [
      {
        path: 'list',
        component: ListelistediffusionComponent,
      },
      {
        path: 'add',
        component: AddlistediffusionComponent,
      },
    ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeDiffusionRoutingModule {
}

export const routedComponents = [
    ListelistediffusionComponent,
    ListeDiffusionComponent
];