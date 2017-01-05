import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {HomePage} from '../home/home';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  loginPage = HomePage;
  constructor(public navCtrl: NavController) {

  }

}
