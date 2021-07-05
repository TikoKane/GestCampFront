import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddmodeleComponent } from './addmodele/addmodele.component';
import { ListemodeleComponent } from './listemodele/listemodele.component';
import { ModeleComponent } from './modele.component';


const routes: Routes = [{
  path: '',
  component: ModeleComponent,
  children: [
    {
      path: 'add',
      component: AddmodeleComponent,
    },
    {
      path: 'list',
      component: ListemodeleComponent,
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
export class ModeleRoutingModule {
}

export const routedComponents = [
  ListemodeleComponent, 
  ModeleComponent
];