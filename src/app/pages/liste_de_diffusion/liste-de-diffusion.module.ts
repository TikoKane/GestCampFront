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
import { NgSelectModule } from '@ng-select/ng-select';
import { ListecontactComponent } from './listecontact/listecontact.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    ...routedComponents,
    AdddiffusionComponent,
    ListecontactComponent],
  imports: [
    NbStepperModule,
    ReactiveFormsModule,
    ListeDeDiffusionRoutingModule,
    ThemeModule,
    NgSelectModule,
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
    ngFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule
  ],
  providers: [
    NewsService
  ]
})
export class ListeDeDiffusionModule { }
