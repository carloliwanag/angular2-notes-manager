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
var note_service_1 = require('../_services/note.service');
var index_1 = require('../_models/index');
var NoteListComponent = (function () {
    function NoteListComponent(noteService, router) {
        this.noteService = noteService;
        this.router = router;
        this.notes = [];
    }
    NoteListComponent.prototype.ngOnInit = function () {
        this.getNotes();
    };
    NoteListComponent.prototype.getNotes = function () {
        var _this = this;
        this.noteService.getByUserId(this.user.userId).subscribe(function (notes) {
            if (notes && notes.notes) {
                _this.notes = notes.notes;
            }
            else {
                _this.notes = [];
            }
        });
    };
    NoteListComponent.prototype.gotoDetail = function (note) {
        var link = ['/note-detail', note.id];
        this.router.navigate(link);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', index_1.User)
    ], NoteListComponent.prototype, "user", void 0);
    NoteListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'note-list',
            templateUrl: 'note-list.component.html'
        }), 
        __metadata('design:paramtypes', [note_service_1.NoteService, router_1.Router])
    ], NoteListComponent);
    return NoteListComponent;
}());
exports.NoteListComponent = NoteListComponent;
//# sourceMappingURL=note-list.component.js.map