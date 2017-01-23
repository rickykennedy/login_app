import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';

// import { HomePage } from '../pages/home/home';
import { Profile } from '../pages/profile/profile';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
// import { Profile } from '../pages/profile/profile';
// import { Pokemon } from '../pages/pokemon/pokemon';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage = TabsPage;

  pages: Array<{title: string, component: any, icon:string}>;
  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Profile', component: Profile , icon:'contact'},
      { title: 'Page One', component: Page1 , icon:'archive'},
      { title: 'Page Two', component: Page2 ,icon:'send'},
      // { title: 'Pokemon', component: Pokemon ,icon:'send'},
    ];
  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
