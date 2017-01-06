import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {SignupPage} from '../signup/signup';
import {UserPage} from '../userpage/userpage';
import {AuthService} from './authservice';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
    providers: [AuthService]
})
export class HomePage {
  signupPage = SignupPage;
  usercreds = {
              name: '',
              password: ''
          }
  constructor(public navCtrl: NavController, public authservice: AuthService) {
  

  }
  login(user) {
        this.authservice.authenticate(user).then(data => {
            if(data) {
                this.navCtrl.setRoot(UserPage);
            }
    });
}
    signup() {
        this.navCtrl.push(SignupPage);
    }

}
