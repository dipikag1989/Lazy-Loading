import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RedditsPage } from './reddits';
import { DetailsPageModule } from '../details/details.module';



@NgModule({
  declarations: [
    RedditsPage,
  ],
  imports: [
    IonicPageModule.forChild(RedditsPage),
    DetailsPageModule
  ],
  exports: [
    RedditsPage
  ]

})
export class RedditsPageModule {}
