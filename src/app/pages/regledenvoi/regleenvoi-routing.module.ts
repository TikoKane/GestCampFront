import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddregledenvoiComponent } from './addregledenvoi/addregledenvoi.component';
import { ListeregledenvoiComponent } from './listeregledenvoi/listeregledenvoi.component';
import { RegledenvoiComponent } from './regleenvoi.component';


const routes: Routes = [{
  path: '',
  component: RegledenvoiComponent,
  children: [
    {
      path: 'add',
      component: AddregledenvoiComponent,
    },
    {
      path: 'list',
      component: ListeregledenvoiComponent,
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegledenvoiRoutingModule {
}

export const routedComponents = [
  ListeregledenvoiComponent, 
  RegledenvoiComponent
];