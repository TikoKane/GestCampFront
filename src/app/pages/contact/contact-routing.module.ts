import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddcontactComponent } from './addcontact/addcontact.component';

import { ContactComponent } from './contact.component';
import { ListcontactComponent } from './listcontact/listcontact.component';


const routes: Routes = [{
  path: '',
  component: ContactComponent,
  children: [
    {
      path: 'list',
      component: ListcontactComponent,
    },
    {
      path: 'add',
      component: AddcontactComponent,
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
  ListcontactComponent,
  ContactComponent
];