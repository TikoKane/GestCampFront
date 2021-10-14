import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule,  NbActionsModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
  NbTabsetModule, } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';
import { routedComponents, UtilisateurRoutingModule} from './utilisateur-routing.module';
import { NewsService } from './news.service';
import { FormsModule as ngFormsModule,ReactiveFormsModule  } from '@angular/forms';
import { AddutilisateurComponent } from './addutilisateur/addutilisateur.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    NbTabsetModule,
    ReactiveFormsModule,
    UtilisateurRoutingModule,
    ThemeModule,
    NbInputModule,
    Ng2SearchPipeModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NgxPaginationModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    NbSelectModule,
    NbTreeGridModule,
    Ng2SmartTableModule,
    NbIconModule,
    ngFormsModule,
    NgbModule
  ],
  declarations: [
    ...routedComponents,
    AddutilisateurComponent,
  ],
  providers: [
    NewsService,
  ],
})
export class UtilisateurModule { }
