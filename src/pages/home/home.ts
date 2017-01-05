import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {SignupPage} from '../signup/signup';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  signupPage = SignupPage;
  constructor(public navCtrl: NavController) {

  }

}
