import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule,  NbActionsModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbRadioModule,
  NbSelectModule,
<<<<<<< HEAD
  NbUserModule, } from '@nebular/theme';
=======
  NbUserModule,
  NbStepperModule, } from '@nebular/theme';
>>>>>>> 7c99457fcc21780c95ee36928f9e73464084d1af
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';
import { ContactRoutingModule, routedComponents} from './campagne-routing.module';
import { NewsService } from './news.service';
import { FormsModule as ngFormsModule,ReactiveFormsModule  } from '@angular/forms';
import { AddcampagneComponent } from './addcampagne/addcampagne.component';


@NgModule({
  imports: [
<<<<<<< HEAD
=======
    NbStepperModule,
>>>>>>> 7c99457fcc21780c95ee36928f9e73464084d1af
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
    ngFormsModule,
  ],
  declarations: [
    ...routedComponents,
    AddcampagneComponent,
  ],
  providers: [
    NewsService,
  ],
})
export class CampagneModule { }
