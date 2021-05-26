import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule,  NbActionsModule,
NbCheckboxModule,
NbDatepickerModule,
NbRadioModule,
NbSelectModule,
NbStepperModule,
NbUserModule, } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';
import { ListeDeDiffusionRoutingModule, routedComponents } from "./liste-de-diffusion-routing.module";
import { NewsService } from "./news.service";
import { FormsModule as ngFormsModule,ReactiveFormsModule  } from '@angular/forms';

import { AdddiffusionComponent } from './adddiffusion/adddiffusion.component';
import { ListdiffusionComponent } from './listdiffusion/listdiffusion.component';



@NgModule({
  declarations: [
    ...routedComponents,
    AdddiffusionComponent],
  imports: [
    NbStepperModule,
    ReactiveFormsModule,
    ListeDeDiffusionRoutingModule,
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    NbSelectModule,
    NbTreeGridModule,
    Ng2SmartTableModule,
    NbIconModule,
    NbStepperModule,
    ngFormsModule
  ],
  providers: [
    NewsService
  ]
})
export class ListeDeDiffusionModule { }
