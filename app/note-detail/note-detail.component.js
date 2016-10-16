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
var index_1 = require('../_services/index');
var NoteDetailComponent = (function () {
    function NoteDetailComponent(location, router, route, noteService, alertService) {
        this.location = location;
        this.router = router;
        this.route = route;
        this.noteService = noteService;
        this.alertService = alertService;
    }
    NoteDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var nId = params['noteId'];
            _this.noteService.getByNoteId(nId).subscribe(function (note) {
                _this.note = note.note;
            });
        });
    };
    NoteDetailComponent.prototype.editNote = function (note) {
        var _this = this;
        this.noteService.update(note).subscribe(function (data) {
            _this.alertService.success(data.message, true);
            var link = ['/user'];
            _this.router.navigate(link);
        }, function (error) {
            _this.alertService.error(error);
            var link = ['/home'];
            _this.router.navigate(link);
        });
    };
    NoteDetailComponent.prototype.delete = function (note) {
        var _this = this;
        this.noteService.delete(note.id).subscribe(function (data) {
            _this.alertService.success(data.message, true);
            var link = ['/user'];
            _this.router.navigate(link);
        }, function (error) {
            _this.alertService.error(error);
            var link = ['/home'];
            _this.router.navigate(link);
        });
    };
    NoteDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    NoteDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'note-detail',
            templateUrl: 'note-detail.component.html'
        }), 
        __metadata('design:paramtypes', [common_1.Location, router_1.Router, router_1.ActivatedRoute, index_1.NoteService, index_1.AlertService])
    ], NoteDetailComponent);
    return NoteDetailComponent;
}());
exports.NoteDetailComponent = NoteDetailComponent;
//# sourceMappingURL=note-detail.component.js.map