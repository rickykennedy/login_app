import { Component } from '@angular/core';

import { NavController,AlertController } from 'ionic-angular';
import {SignupPage} from '../signup/signup';
import {UserPage} from '../userpage/userpage';
// import {AuthService} from './authservice';
import { AuthService } from "../../providers/authservice";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
    providers: [AuthService, HomePage]
})
export class HomePage {
  signupPage = SignupPage;
  usercreds = {
    email: '',
    password: ''
  }
  constructor(public navCtrl: NavController, public authservice: AuthService, public alertCtrl: AlertController) {
      this.authservice = authservice;
        this.navCtrl = navCtrl;

  }
  login(user) {
    //   console.log("user: " + user);
        this.authservice.authenticate(user).then(data => {
            // console.log(data);
            if(data){
                console.log('Login - success');
                let alert = this.alertCtrl.create({
                    title: 'Success',
                    subTitle: 'Login Successfully.',
                    buttons: ['ok']
                });
                alert.present();
                this.navCtrl.setRoot(UserPage);
            }else{
                console.log("Login - failed");
                let alert = this.alertCtrl.create({
                    title: 'Failed',
                    subTitle: 'Please insert valid email and password.',
                    buttons: ['ok']
                });
              alert.present();
            }
            // if(data) {
            //     this.navCtrl.setRoot(UserPage);
            // }
    });
}
    signup() {
        this.navCtrl.push(SignupPage);
    }
    fetchList(){
        this.authservice.fetch_speakers().then(data =>{
            console.log(data);
            if(data){
                console.log('success');
            }else{
                console.log("failed");
            }
        });
    }
}
