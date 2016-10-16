"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var globalEventsManager_1 = require('./globalEventsManager');
var user_1 = require('../_models/user');
var AuthenticationService = (function () {
    function AuthenticationService(http, gem) {
        this.http = http;
        this.gem = gem;
    }
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        return this.http.post('http://localhost:3020/api/users/authenticate', { username: username, password: password })
            .map(function (response) {
            var userJSON = JSON.parse(response._body).user;
            if (userJSON) {
                var user = new user_1.User();
                user.userId = userJSON.id;
                user.firstName = userJSON.firstName;
                user.lastName = userJSON.lastName;
                user.username = userJSON.username;
                // store user details in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                _this.gem.showNavBar.emit(true);
            }
            else {
                _this.gem.showNavBar.emit(false);
            }
        });
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.gem.showNavBar.emit(false);
    };
    AuthenticationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, globalEventsManager_1.GlobalEventsManager])
    ], AuthenticationService);
    return AuthenticationService;
}());
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map