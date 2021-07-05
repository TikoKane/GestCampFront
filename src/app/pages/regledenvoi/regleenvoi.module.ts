import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule,  NbActionsModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule, } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';
import { NewsService } from './news.service';
import { FormsModule as ngFormsModule,ReactiveFormsModule  } from '@angular/forms';
import { RegledenvoiRoutingModule, routedComponents } from './regleenvoi-routing.module';
import { AddregledenvoiComponent } from './addregledenvoi/addregledenvoi.component';

@NgModule({
  imports: [
    ReactiveFormsModule,
    RegledenvoiRoutingModule,
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
  ],
  declarations: [
    ...routedComponents,
    AddregledenvoiComponent,
  ],
  providers: [
    NewsService,
  ],
})
export class RegledenvoiModule { }
