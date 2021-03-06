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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var common_1 = require('@angular/common');
var http_2 = require('@angular/http');
var app_component_1 = require('./app.component');
var app_routing_1 = require('./app.routing');
var index_1 = require('./_directives/index');
var index_2 = require('./_guards/index');
var index_3 = require('./_services/index');
var index_4 = require('./user-home/index');
var index_5 = require('./login/index');
var index_6 = require('./register/index');
var index_7 = require('./note-detail/index');
var index_8 = require('./home/index');
var index_9 = require('./navigation-top/index');
var index_10 = require('./note-list/index');
var index_11 = require('./note-form/index');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routing_1.routing
            ],
            declarations: [
                app_component_1.AppComponent,
                index_1.AlertComponent,
                index_4.UserHomeComponent,
                index_5.LoginComponent,
                index_6.RegisterComponent,
                index_8.HomeComponent,
                index_9.NavigationTopComponent,
                index_10.NoteListComponent,
                index_11.NoteFormComponent,
                index_7.NoteDetailComponent
            ],
            providers: [
                index_2.AuthGuard,
                index_3.AlertService,
                index_3.AuthenticationService,
                index_3.UserService,
                index_3.NoteService,
                http_2.BaseRequestOptions,
                { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy },
                index_3.GlobalEventsManager
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map