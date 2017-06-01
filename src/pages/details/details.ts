import { Component } from '@angular/core';
import { NavController ,NavParams,IonicPage} from 'ionic-angular';
// import { IonicPage } from 'ionic-angular'

@IonicPage()

@Component({
 templateUrl: 'details.html'
})
export class DetailsPage {
	item:any;
  constructor(public navCtrl: NavController,public params:NavParams ) {
  	this.item=params.get('item');
  }

}
