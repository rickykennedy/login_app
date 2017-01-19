import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { AuthService } from "../../providers/authservice";
import {HomePage} from '../home/home';

/*
  Generated class for the Userpage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-userpage',
  templateUrl: 'userpage.html',
    providers: [AuthService,UserPage]
})
export class UserPage {
  usercred = {
    id: '1',
    email: 'rickykennedy.development@gmail.com',
    username: '123456'
  };
  constructor(public navCtrl: NavController, public authservice: AuthService, public alertCtrl: AlertController) {
    this.authservice = authservice;
    this.navCtrl = navCtrl;
    // this.usercred.id = this.authservice.userInfo.id;
    // this.usercred.
    // this.usercred.id = this.authservice.userInfo.id;
    //   this.usercred.email = this.authservice.userInfo.email;
    //   this.usercred.password = this.authservice.userInfo.password;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
  }
  logout() {
   this.authservice.logout();
   this.navCtrl.setRoot(HomePage);
   }
   getinfo(){
     this.authservice.getinfo().then(data => {
       console.log("userpage: " + data);
       if(data['success']){
         var alert = this.alertCtrl.create({
          title: data['success'],
          subTitle: data['msg'],
          buttons: ['ok']
        });
        alert.present();
       }
     });
   }
}
