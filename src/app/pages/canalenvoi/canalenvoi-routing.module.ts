import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddcanalenvoiComponent } from './addcanalenvoi/addcanalenvoi.component';

import { CanalenvoiComponent } from './canalenvoi.component';
import { ListcanalenvoiComponent } from './listcanalenvoi/listcanalenvoi.component';


const routes: Routes = [{
  path: '',
  component: CanalenvoiComponent,
  children: [
    {
      path: 'list',
      component: ListcanalenvoiComponent,
    },
    {
      path: 'add',
      component: AddcanalenvoiComponent,
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
export class CanalenvoiRoutingModule {
}

export const routedComponents = [
  ListcanalenvoiComponent,
  CanalenvoiComponent
];