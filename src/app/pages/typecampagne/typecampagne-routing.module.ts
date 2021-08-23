import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddtypecampagneComponent } from './addtypecampagne/addtypecampagne.component';
import { ListetypecampagneComponent } from './listetypecampagne/listetypecampagne.component';
import { TypecampagneComponent } from './typecampagne.component';


const routes: Routes = [{
  path: '',
  component: TypecampagneComponent,
  children: [
    {
      path: 'add',
      component: AddtypecampagneComponent,
    },
    {
      path: 'list',
      component: ListetypecampagneComponent,
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
export class TypecampagneRoutingModule {
}

export const routedComponents = [
  ListetypecampagneComponent, 
  TypecampagneComponent
];