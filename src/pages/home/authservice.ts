import {Injectable, Inject} from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class AuthService {
    isLoggedin: boolean;
    AuthToken;
    constructor(public http: Http) {
        this.http = http;
        this.isLoggedin = false;
        this.AuthToken = null;
    }

    storeUserCredentials(token) {
        window.localStorage.setItem('test', token);
        this.useCredentials(token);

    }

    useCredentials(token) {
        this.isLoggedin = true;
        this.AuthToken = token;
    }

    loadUserCredentials() {
        var token = window.localStorage.getItem('test');
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
        var creds = "name=" + user.name + "&password=" + user.password;
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
    //     headers.append('Content-Type', 'application/json');
    //     headers.append("Access-Control-Allow-Origin", "*");
    //     // headers.append("Access-Control-Allow-Origin", "http://localhost/*");
    //    headers.append("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    //    headers.append("Access-Control-Allow-Headers", "Content-Type");
    //    headers.append("Accept", "application/json'");
    

        return new Promise(resolve => {
            this.http.post('/api/user/authenticate', creds, {headers: headers}).subscribe(data => {
                console.log("authenticate data: " + data);
                if(data.json().success){
                    this.storeUserCredentials(data.json().token);
                    resolve(true);
                }
                else
                    resolve(false);
            });
        });
    }
    adduser(user) {
        var creds = "name=" + user.name + "&password=" + user.password;
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append("Access-Control-Allow-Origin", "*");
        return new Promise(resolve => {
            this.http.post('/api/user/create', creds, {headers: headers}).subscribe(data => {
                if(data.json().success){
                    resolve(true);
                }
                else
                    resolve(false);
            });
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
        this.destroyUserCredentials();
    }
}
