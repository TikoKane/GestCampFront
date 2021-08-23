import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule,  NbActionsModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule, } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';
import { CanalenvoiRoutingModule,routedComponents} from './canalenvoi-routing.module';
import { NewsService } from './news.service';
import { AddcanalenvoiComponent } from './addcanalenvoi/addcanalenvoi.component';
import { FormsModule as ngFormsModule,ReactiveFormsModule  } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  imports: [
    ReactiveFormsModule,
    CanalenvoiRoutingModule,
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
    NgxPaginationModule,
    Ng2SearchPipeModule
  ],
  declarations: [
    ...routedComponents,
    AddcanalenvoiComponent,
  ],
  providers: [
    NewsService,
  ],
})
export class CanalenvoiModule { }
