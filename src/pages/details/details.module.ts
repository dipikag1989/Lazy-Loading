import { NgModule } from '@angular/core';
// import { IonicModule} from 'ionic-angular';
import { IonicPageModule } from 'ionic-angular';
import { DetailsPage } from './details';




@NgModule({
  declarations: [
    DetailsPage,
  ],
  imports: [
   IonicPageModule.forChild(DetailsPage)
  ],
  exports: [
    DetailsPage
  ]
})
export class DetailsPageModule {}
