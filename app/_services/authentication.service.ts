import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'


import { GlobalEventsManager } from './globalEventsManager';
import { User } from '../_models/user';

@Injectable()
export class AuthenticationService {
    constructor(private http: Http, private gem: GlobalEventsManager) { }

    login(username, password) {
        return this.http.post('http://localhost:3020/api/users/authenticate', { username: username, password: password })
            .map((response: any) => {                
                let userJSON = JSON.parse(response._body).user;
                if (userJSON) {
                    var user = new User();
                    user.userId = userJSON.id;
                    user.firstName = userJSON.firstName;
                    user.lastName = userJSON.lastName;
                    user.username = userJSON.username;
                    // store user details in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.gem.showNavBar.emit(true);
                } else {
                    this.gem.showNavBar.emit(false);
                }
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.gem.showNavBar.emit(false);
    }
}