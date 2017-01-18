import { Component } from '@angular/core';

import { NavController, AlertController } from 'ionic-angular';
import {HomePage} from '../home/home';
import { AuthService } from "../../providers/authservice";

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
    providers: [AuthService]
})
export class SignupPage {
  loginPage = HomePage;
  newcreds = {
            name: '',
            email: '',
            password: '',
            // confirm_password:''
        }
  constructor(public navCtrl: NavController, public authservice: AuthService, public alertCtrl: AlertController) {
        this.authservice = authservice;
        this.navCtrl = navCtrl;
  }
  register(newcreds) {
      this.authservice.adduser(newcreds).then(data => {
          if (data) {
              console.log("data true: ");
                let alert = this.alertCtrl.create({
                    title: 'Success',
                    subTitle: 'Your account has been created.',
                    buttons: ['ok']
                });
              alert.present();
              console.log(data);
          } else {
              let alert = this.alertCtrl.create({
                    title: 'Fail',
                    subTitle: 'Fail to create user',
                    buttons: ['ok']
                });
              console.log("data false: ");
              alert.present();
          }
        console.log("alert: ");
    });
  }
}
