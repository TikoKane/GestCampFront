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
import { CKEditorModule } from 'ng2-ckeditor';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CategorieRoutingModule, routedComponents } from './categorie-routing.module';
import { AddCategorieComponent } from './add-categorie/add-categorie.component';


@NgModule({
  imports: [
    ReactiveFormsModule,
    CategorieRoutingModule,
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbTabsetModule,
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
    AddCategorieComponent,
  ],
  providers: [
    NewsService,
  ],
})
export class CategorieModule { }
