import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import {AuthService} from '../../providers/authservice';
import {Database} from '../../providers/database';
import {Observable} from 'rxjs/Rx';
import { Page1 } from '../page1/page1';

/*
  Generated class for the Profile page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
  providers: [AuthService, Database]
})
export class Profile {
  usercred :any;
//   private observable: Observable;
    counter: any;
  constructor(public navCtrl: NavController, public authservice: AuthService, public alertCtrl: AlertController) {
    this.counter = 0;
    this.authservice = authservice;
    this.authservice.loadUserInfo();
    this.usercred = this.authservice.userInfo;
    console.log("usercred @profile ");
    console.log(JSON.stringify(this.usercred));
  }
  
  fetchList(){
        this.authservice.fetch_speakers().then(data =>{
            console.log("here it goes");
            console.log(data);
            if(data){
            // if(data.status == 200 && data.statusText=="OK"){
                console.log('success');
                Observable.interval(1000 * 10).subscribe(x => {
                    // this.presentAlert();
                    this.counter++;
                    // console.log("test " + this.counter);
                    this.print(this.counter);
                    this.print2();

                });
            }else{
                console.log("failed");
            }
        });
  }
  print2() {
      console.log("print2 " + this.counter);
      if (this.counter == 5) {
          this.navCtrl.setRoot(Page1);
      }
    }
  print(counter) {
      console.log("test " + counter);
      
    }
    presentAlert() {
        this.authservice.test().then(data=>{
            console.log(data);
            alert(data);
        })
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
