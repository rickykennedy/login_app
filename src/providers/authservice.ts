import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class AuthService {
    isLoggedin: boolean;
    AuthToken;
    userInfo = {
        id: '',
        email: '',
        username: ''
    };
    abc: string;
    constructor(public http: Http) {
        this.http = http;
        this.isLoggedin = false;
        this.AuthToken = null;
    }
    /**
     * userInfo must already be stringify using JSON.stringify() function
     */
    storeUserInfo(userInfo) {
        // console.log("store: ");
        // console.log(userInfo);
        // console.log(JSON.stringify(userInfo));
        window.localStorage.setItem('userInfo', userInfo);
        this.useUserInfo(userInfo);
    }
    useUserInfo(userInfo) {
    //     console.log("input: ");
    //     console.log(userInfo);
    //     console.log('\n');
    //                 // console.log(JSON.stringify(userInfo));
    //     console.log("userinfo:");
    //                 console.log(this.userInfo);
    //                 console.log(JSON.stringify(this.userInfo));
                    this.userInfo = userInfo;
                    // this.userInfo.id = userInfo.id;
                    // this.userInfo.username = userInfo.username;
                    // this.userInfo.email = userInfo.email;
        // console.log("After userinfo:");
        //             console.log(this.userInfo);
                    // console.log(JSON.stringify(this.userInfo));
    }
    loadUserInfo() {
        var userInfo = JSON.parse(window.localStorage.getItem('userInfo'));
        // console.log("load: ");
        // console.log(userInfo);
        // console.log(JSON.stringify(userInfo));
        this.useUserInfo(userInfo);
    }
    destroyUserInfo() {
        this.userInfo = null;
        window.localStorage.clear();
    }
    storeUserCredentials(token) {
        window.localStorage.setItem('token', token);
        this.useCredentials(token);

    }

    useCredentials(token) {
        this.isLoggedin = true;
        this.AuthToken = token;
    }

    loadUserCredentials() {
        var token = window.localStorage.getItem('token');
        this.useCredentials(token);
    }

    destroyUserCredentials() {
        this.isLoggedin = false;
        this.AuthToken = null;
        window.localStorage.clear();
    }

    fetch_speakers() {
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
    //     headers.append('Content-Type', 'application/json');
    //     headers.append("Access-Control-Allow-Origin", "*");
    //    headers.append("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    //    headers.append("Access-Control-Allow-Headers", "Content-Type");
    //    headers.append("Accept", "application/json'");
    

        return new Promise(resolve => {
            this.http.post('/fetch_speakers/contentpackage/0000000035/0000000038/fetch_speakers.txt', {headers: headers}).subscribe(data => {
                console.log("fetch_speakers data: ");
                console.log(data);
                // console.log
                if(data.status == 200 && data.statusText == "OK"){
                    console.log("success");
                    console.log(data.json());
                    // this.storeUserCredentials(data.json().token);
                    // resolve(true);
                }
                else{
                    console.log("fail to fetch data");
                }
                    // resolve(false);
            });
        });
    }

    authenticate(user) {
        var creds = "email=" + user.email + "&password=" + user.password;
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return new Promise(resolve => {
            this.http.post('/api/user/authenticate', creds, {headers: headers}).subscribe(data => {
                // console.log("authenticate data: " + data);
                if (data.json().status == "200") {
                    console.log("authenticate data:");
                    console.log(JSON.stringify(data.json()));
                    // console.log("check data:");
                    // console.log(JSON.stringify(data));
                    // console.log('id: ' + data.json().id);
                    // console.log('id: ' + data.json()['id']);
                    // console.log('id: ' + JSON.stringify(data.json().id));
                    // console.log('id: ' + JSON.stringify(data.json()['id']));
                    let userInfo = {
                        id:data.json().id,
                        username:data.json().name,
                        email:data.json().email,
                    }
                    this.storeUserInfo(JSON.stringify(userInfo));
                    // this.userInfo.id = data.json()['id'];
                    // this.userInfo.username = data.json()['name'];
                    // this.userInfo.email = data.json()['email'];
                    // console.log("userinfo:");
                    // console.log(this.userInfo);
                    // console.log(JSON.stringify(this.userInfo));
                    // this.userInfo = JSON.stringify(data.json());
                    // this.storeUserCredentials(data.json().token);
                    resolve(true);
                }
                else {
                    resolve(false);
                }
                    
            });
        });
    }

    adduser(user) {
        var creds = "name=" + user.name + "&email=" + user.email+ "&password=" + user.password;
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append("Access-Control-Allow-Origin", "*");
        return new Promise(resolve => {
            this.http.post('/api/user/create', creds, { headers: headers }).subscribe(data => {
                console.log("inside promise");
                console.log(data);
                console.log("json");
                console.log(data.json());
                if(data.json().status == "200"){
                    resolve(true);
                }else {
                    resolve(false);
                }
                    
            });
        });
    }

  test(){
    return new Promise((resolve,reject)=>{
        this.abc = 'anc';
        return resolve(this.abc);
    
        
    });     
  }

    getinfo() {
        return new Promise(resolve => {
            var headers = new Headers();
            this.loadUserCredentials();
            console.log(this.AuthToken);
            headers.append('Authorization', 'Bearer ' +this.AuthToken);
            headers.append("Access-Control-Allow-Origin", "*");
            this.http.get('/api/user/get_user', {headers: headers}).subscribe(data => {
                if(data.json().success)
                    resolve(data.json());
                else
                    resolve(false);
            });
        })
    }

    logout() {
        // this.destroyUserCredentials();
        this.destroyUserInfo();
    }
}
