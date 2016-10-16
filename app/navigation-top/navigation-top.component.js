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
var NavigationTopComponent = (function () {
    function NavigationTopComponent(gem, authService, router) {
        this.gem = gem;
        this.authService = authService;
        this.router = router;
        this.showNavBar = false;
    }
    NavigationTopComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.gem.showNavBar.subscribe(function (mode) {
            _this.showNavBar = mode;
        });
    };
    NavigationTopComponent.prototype.logout = function () {
        this.authService.logout();
        var link = ['/'];
        this.router.navigate(link);
    };
    NavigationTopComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'top-navigation',
            templateUrl: 'navigation-top.component.html'
        }), 
        __metadata('design:paramtypes', [index_1.GlobalEventsManager, index_1.AuthenticationService, router_1.Router])
    ], NavigationTopComponent);
    return NavigationTopComponent;
}());
exports.NavigationTopComponent = NavigationTopComponent;
//# sourceMappingURL=navigation-top.component.js.map