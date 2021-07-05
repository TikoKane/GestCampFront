import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdddiffusionComponent } from "./adddiffusion/adddiffusion.component";

import { ListeDeDiffusionComponent } from "./liste-de-diffusion.component";
import { ListdiffusionComponent } from "./listdiffusion/listdiffusion.component";
<<<<<<< HEAD
import { ListecontactComponent } from './listecontact/listecontact.component';
=======
>>>>>>> 883326b75956340257501077c3438bd45baad99d


const routes: Routes = [{
  path: '',
  component: ListeDeDiffusionComponent,
  children: [
    {
      path: 'list',
      component: ListdiffusionComponent,
    },
    {
<<<<<<< HEAD
      path: 'listcontact/:id',
      component: ListecontactComponent,
    },
    {
=======
>>>>>>> 883326b75956340257501077c3438bd45baad99d
      path: 'add',
      component: AdddiffusionComponent,
    },/*
    {
      path: 'accordion',
      component: AccordionComponent,
    },
    {
      path: 'tabs',
      component: TabsComponent,
      children: [
        {
          path: '',
          redirectTo: 'tab1',
          pathMatch: 'full',
        },
        {
          path: 'tab1',
          component: Tab1Component,
        },
        {
          path: 'tab2',
          component: Tab2Component,
        },
      ],
    },*/
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ListeDeDiffusionRoutingModule { 

}

export const routedComponents = [
  ListdiffusionComponent,
<<<<<<< HEAD
  ListecontactComponent,
=======
>>>>>>> 883326b75956340257501077c3438bd45baad99d
  ListeDeDiffusionComponent
];