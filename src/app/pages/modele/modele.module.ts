import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule,  NbActionsModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
  NbStepperModule,
  NbTabsetModule, } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';
import { NewsService } from './news.service';
import { FormsModule as ngFormsModule,ReactiveFormsModule  } from '@angular/forms';
import { ModeleRoutingModule, routedComponents } from './modele-routing.module';
import { AddmodeleComponent } from './addmodele/addmodele.component';
import { CKEditorModule } from 'ng2-ckeditor';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  imports: [
    NbTabsetModule,
    ReactiveFormsModule,
    ModeleRoutingModule,
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
    CKEditorModule,
    NbStepperModule,
    NgxPaginationModule,
    Ng2SearchPipeModule
  ],
  declarations: [
    ...routedComponents,
    AddmodeleComponent,
  ],
  providers: [
    NewsService,
  ],
})
export class ModeleModule { }
