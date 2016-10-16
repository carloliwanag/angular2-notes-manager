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
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
var note_1 = require('../_models/note');
var index_1 = require('../_services/index');
var NoteFormComponent = (function () {
    function NoteFormComponent(noteService, alertService, router, location, route) {
        this.noteService = noteService;
        this.alertService = alertService;
        this.router = router;
        this.location = location;
        this.route = route;
        this.note = new note_1.Note();
        this.loading = false;
    }
    NoteFormComponent.prototype.submitRequest = function (note) {
        var _this = this;
        note.userId = this.userId;
        this.loading = true;
        this.noteService.create(note)
            .subscribe(function (data) {
            _this.alertService.success("Note was succesfully created", true);
            var link = ['/user'];
            _this.router.navigate(link);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    NoteFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var uId = +params['userId'];
            _this.userId = uId;
        });
    };
    NoteFormComponent.prototype.goBack = function () {
        this.location.back();
    };
    NoteFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'note-form',
            templateUrl: 'note-form.component.html'
        }), 
        __metadata('design:paramtypes', [index_1.NoteService, index_1.AlertService, router_1.Router, common_1.Location, router_1.ActivatedRoute])
    ], NoteFormComponent);
    return NoteFormComponent;
}());
exports.NoteFormComponent = NoteFormComponent;
//# sourceMappingURL=note-form.component.js.map