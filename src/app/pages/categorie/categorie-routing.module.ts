import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCategorieComponent } from './add-categorie/add-categorie.component';
import { CategorieComponent } from './categorie.component';
import { ListeCategorieComponent } from './liste-categorie/liste-categorie.component';


const routes: Routes = [{
  path: '',
  component: CategorieComponent,
  children: [
    {
      path: 'add',
      component: AddCategorieComponent,
    },
    {
      path: 'list',
      component: ListeCategorieComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategorieRoutingModule {
}

export const routedComponents = [
  ListeCategorieComponent, 
  CategorieComponent
];