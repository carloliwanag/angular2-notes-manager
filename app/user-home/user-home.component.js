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
var router_1 = require('@angular/router');
var index_1 = require('../_services/index');
var index_2 = require('../_services/index');
var UserHomeComponent = (function () {
    function UserHomeComponent(userService, gem, router) {
        this.userService = userService;
        this.gem = gem;
        this.router = router;
        // this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    UserHomeComponent.prototype.ngOnInit = function () {
        var user = localStorage.getItem('currentUser');
        var emit = false;
        if (user) {
            emit = true;
            this.currentUser = JSON.parse(user);
        }
        this.gem.showNavBar.emit(emit);
    };
    UserHomeComponent.prototype.createNote = function () {
        var link = ['/note-form', this.currentUser.userId];
        this.router.navigate(link);
    };
    UserHomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'user-home.component.html'
        }), 
        __metadata('design:paramtypes', [index_1.UserService, index_2.GlobalEventsManager, router_1.Router])
    ], UserHomeComponent);
    return UserHomeComponent;
}());
exports.UserHomeComponent = UserHomeComponent;
//# sourceMappingURL=user-home.component.js.map