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
import { NewsService } from './news.service';
import { FormsModule as ngFormsModule,ReactiveFormsModule  } from '@angular/forms';
import { CKEditorModule } from 'ng2-ckeditor';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { routedComponents, TypecampagneRoutingModule } from './typecampagne-routing.module';
import { AddtypecampagneComponent } from './addtypecampagne/addtypecampagne.component';


@NgModule({
  imports: [
    ReactiveFormsModule,
    TypecampagneRoutingModule,
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
    AddtypecampagneComponent,
  ],
  providers: [
    NewsService,
  ],
})
export class TypeCampagneModule { }
