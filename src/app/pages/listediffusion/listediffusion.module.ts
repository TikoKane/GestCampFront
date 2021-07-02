import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule,  NbActionsModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
  NbStepperModule, } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';
import { ListeDiffusionRoutingModule, routedComponents} from './listediffusion-routing.modules';
import { NewsService } from './news.service';
import { FormsModule as ngFormsModule,ReactiveFormsModule  } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import{ AddlistediffusionComponent } from './addlistediffusion/addlistediffusion.component';
import { ListelistediffusionComponent } from './listelistediffusion/listelistediffusion.component';


@NgModule({
  imports: [
    NbStepperModule,
    ReactiveFormsModule,
    ListeDiffusionRoutingModule,
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
    ngFormsModule,
    NgSelectModule,
  ],
  declarations: [
    ...routedComponents,
    AddlistediffusionComponent,
    ListelistediffusionComponent,
  ],
  providers: [
    NewsService,
  ],
})
export class ListeDiffusionModule { }