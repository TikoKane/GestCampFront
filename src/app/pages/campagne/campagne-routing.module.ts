import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddcampagneComponent } from './addcampagne/addcampagne.component';
import { CampagneComponent } from './campagne.component';

import { ListecampagneComponent } from './listecampagne/listecampagne.component';


const routes: Routes = [{
  path: '',
  component: CampagneComponent,
  children: [
    {
      path: 'list',
      component: ListecampagneComponent,
    },
    {
      path: 'add',
      component: AddcampagneComponent,
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
  exports: [RouterModule],
})
export class ContactRoutingModule {
}

export const routedComponents = [
  ListecampagneComponent,
  CampagneComponent
];