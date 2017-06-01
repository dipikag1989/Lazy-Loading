import { Component } from '@angular/core';

// import { AboutPage } from '../about/about';
// import { RedditsPage } from '../reddits/reddits';
// import { SettingsPage } from '../settings/settings';
import { IonicPage } from 'ionic-angular'

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'RedditsPage';
  tab2Root = 'SettingsPage';
  tab3Root = 'AboutPage';

  constructor() {

  }
}
