import { Component } from '@angular/core';

import { NavController, AlertController } from 'ionic-angular';
import {HomePage} from '../home/home';
import {AuthService} from '../home/authservice';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
    providers: [AuthService]
})
export class SignupPage {
  loginPage = HomePage;
  newcreds = {
            name: '',
            password: ''
        }
  constructor(public navCtrl: NavController, public authservice: AuthService, public alertCtrl: AlertController) {
        this.authservice = authservice;
        this.navCtrl = navCtrl;
  }
  register(user) {
        this.authservice.adduser(user).then(data => {
            if(data) {
                var alert = this.alertCtrl.create({
                    title: 'Success',
                    subTitle: 'User Created',
                    buttons: ['ok']
                });
                alert.present();
            }
    });
  }
}
