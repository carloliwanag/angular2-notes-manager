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
var NoteService = (function () {
    function NoteService(http) {
        this.http = http;
    }
    NoteService.prototype.getByUserId = function (userId) {
        return this.http.get('http://localhost:3020/api/notes/user/' + userId).map(function (response) {
            if (response) {
                var notes = response.json();
                return notes;
            }
        });
    };
    NoteService.prototype.getByNoteId = function (noteId) {
        return this.http.get('http://localhost:3020/api/notes/' + noteId).map(function (response) { return response.json(); });
    };
    NoteService.prototype.create = function (note) {
        return this.http.post('http://localhost:3020/api/notes', note).map(function (response) { return response.json(); });
    };
    NoteService.prototype.update = function (note) {
        return this.http.put('http://localhost:3020/api/notes/' + note.id, note).map(function (response) { return response.json(); });
    };
    NoteService.prototype.delete = function (noteId) {
        return this.http.delete('http://localhost:3020/api/notes/' + noteId).map(function (response) { return response.json(); });
    };
    NoteService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], NoteService);
    return NoteService;
}());
exports.NoteService = NoteService;
//# sourceMappingURL=note.service.js.map