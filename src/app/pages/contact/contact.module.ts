import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule,  NbActionsModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbRadioModule,
  NbSelectModule,
<<<<<<< HEAD
  NbUserModule,
  NbStepperModule, } from '@nebular/theme';
=======
  NbStepperModule,
  NbUserModule, } from '@nebular/theme';
>>>>>>> 7c99457fcc21780c95ee36928f9e73464084d1af
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';
import { ContactRoutingModule, routedComponents} from './contact-routing.module';
import { NewsService } from './news.service';
import { FormsModule as ngFormsModule,ReactiveFormsModule  } from '@angular/forms';
import { AddcontactComponent } from './addcontact/addcontact.component';
<<<<<<< HEAD
=======
import { ImportcontactComponent } from './importcontact/importcontact.component';
>>>>>>> 7c99457fcc21780c95ee36928f9e73464084d1af


@NgModule({
  imports: [
    NbStepperModule,
    ReactiveFormsModule,
    ContactRoutingModule,
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
<<<<<<< HEAD
    ngFormsModule,
=======
    NbStepperModule,
    ngFormsModule
>>>>>>> 7c99457fcc21780c95ee36928f9e73464084d1af
  ],
  declarations: [
    ...routedComponents,
    AddcontactComponent,
<<<<<<< HEAD
=======
    ImportcontactComponent,
>>>>>>> 7c99457fcc21780c95ee36928f9e73464084d1af
  ],
  providers: [
    NewsService,
  ],
})
export class ContactModule { }
